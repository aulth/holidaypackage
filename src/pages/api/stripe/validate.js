// pages/api/stripe/validate-payment.js

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { sessionId } = req.body;

      const paymentIntent = await stripe.checkout.sessions.retrieve(sessionId);

      // Check the status of the payment
      if (paymentIntent && paymentIntent.payment_status === 'paid') {
        res.status(200).json({ success: true });
      } else {
        res.status(400).json({ success: false });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
