const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import Booking from '../../../../Models/Booking';
import connectToDb from '../../../../middleware/connectToDb';
connectToDb();
const redirectURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://tourism-zeta.vercel.app';

async function createStripeSession(req, res) {
  console.log(req.body)
  const {data} = req.body;
  console.log(data)
  const transformedItem = {
    quantity: 1,
    price_data: {
      currency: 'aed',
      product_data: {
        name: data.name,
        description: data.description,
      },
      unit_amount: data.price * 100,
    },
  };

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [transformedItem],
      mode: 'payment',
      success_url: redirectURL + '/success/',
      cancel_url: redirectURL + '/failed'
    });

    const booking = await Booking.findOneAndUpdate(
      { bookingNumber: data.bookingNumber },
      { sessionId: session.id }
    );
    if (booking) {
      res.json({ id: session.id });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

export default createStripeSession;
