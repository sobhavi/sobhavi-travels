import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_live_U1KSN83GzfDtba';
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || 'nKlO9C7TAt5UmQXb2jSrFoaX';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, city } = body;

    const amountInPaise = 5000 * 100; // ₹5,000 in paise
    const authHeader = 'Basic ' + Buffer.from(`${RAZORPAY_KEY_ID}:${RAZORPAY_KEY_SECRET}`).toString('base64');

    const res = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: amountInPaise,
        currency: 'INR',
        receipt: `andaman_${Date.now()}`,
        notes: {
          trip: 'Andaman Women-Only Trip (23-28 Jan 2027)',
          customerName: name || '',
          customerEmail: email || '',
          customerPhone: phone || '',
          departureCity: city || ''
        }
      })
    });

    if (!res.ok) {
      const err = await res.json();
      console.error('Failed to create Razorpay order:', err);
      return NextResponse.json({ success: false, error: err }, { status: 500 });
    }

    const order = await res.json();
    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: RAZORPAY_KEY_ID
    });
  } catch (error: any) {
    console.error('Error in create-order route:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
