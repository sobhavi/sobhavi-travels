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

    const payload: Record<string, any> = {
      amount: amountInPaise,
      currency: 'INR',
      accept_partial: false,
      description: 'Book Your Seat - Advance Payment of ₹5,000 | Andaman Women-Only Trip (23-28 Jan 2027)',
      notes: {
        trip: 'Andaman Women-Only Group Trip (23-28 Jan 2027)',
        departureCity: city || 'Not specified',
        type: 'Advance Seat Booking'
      },
      callback_url: 'https://www.sobhavitravel.com/trips/andaman-january-2027?booking=confirmed',
      callback_method: 'get'
    };

    if (name || email || phone) {
      payload.customer = {
        name: name || 'Guest',
        email: email || undefined,
        contact: phone || undefined
      };
      payload.notify = {
        sms: !!phone,
        email: !!email
      };
    }

    const res = await fetch('https://api.razorpay.com/v1/payment_links', {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errData = await res.json();
      console.error('Razorpay payment link error:', errData);
      // Fallback to static verified link
      return NextResponse.json({
        success: true,
        shortUrl: 'https://rzp.io/rzp/dumm6Bj',
        id: 'plink_U1NOvdmyvuUNFM',
        fallback: true
      });
    }

    const data = await res.json();
    return NextResponse.json({
      success: true,
      id: data.id,
      shortUrl: data.short_url
    });
  } catch (error: any) {
    console.error('Error creating Razorpay payment link:', error);
    return NextResponse.json({
      success: true,
      shortUrl: 'https://rzp.io/rzp/dumm6Bj',
      fallback: true
    });
  }
}
