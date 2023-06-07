import { createContext, useContext, useState } from "react";
// Creating the user context
const UserContext = createContext();
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
import { loadStripe } from '@stripe/stripe-js';
import { toast } from "react-hot-toast";
const stripePromise = loadStripe(publishableKey);
export default function AppStore({ children }) {
  const [allOrders, setAllOrders] = useState();
  const user = {
    id: 1,
    name: "Mohd Usman",
    token: "3DJ39#DFLLDF58$LKDFO#O3N4OO"
  }
  const initiateBooking = async (data) => {
    const response = await fetch('/api/booking/add', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ data })
    })
    const responseData = await response.json();
    console.log(responseData);
    if (responseData.success) {
      createCheckOutSession(responseData.bookingNumber, data);
    } else {
      alert(responseData.msg)
    }
  }
  const createCheckOutSession = async (bookingNumber, data) => {
    if (data.type == 'package') {
      let amount = data.traveller.adult * data.price[`adult${data.occupancy[0].toUpperCase() + data.occupancy.slice(1)}`] + data.traveller.child * data.price.child + data.traveller.infant * data.price.infant;
      data.amount = amount
    }
    try {
      const response = await fetch('/api/stripe/create-stripe-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            name: data.type[0].toUpperCase() + data.type.slice(1).toLowerCase() + " Payment",
            price: data.amount,
            description: data.title,
            quantity: 1,
            bookingNumber: bookingNumber,
            data: data
          },
        }),
      });

      const checkoutSession = await response.json();
      if (typeof window != undefined) {
        localStorage.setItem('sessionId', checkoutSession.id);
      }
      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const fetchAllOrders = async () => {
    const response = await fetch('/api/booking/getall', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ 'adminPin': process.env.NEXT_ADMIN_PIN })
    });
    let json = await response.json();
    if (json.success) {
      console.log(json);
      setAllOrders(json.orders)
    }
  }
  const alert = {
    success:(msg)=>{
      toast.success(msg)
    },
    error:(msg)=>{
      toast.error(msg)
    }
  }
    return (
      <UserContext.Provider value={{ user, initiateBooking, fetchAllOrders, allOrders, alert }}>
        {children}
      </UserContext.Provider>
    );
  }

  // Make useUserContext Hook to easily use our context throughout the application
  export function useUserContext() {
    return useContext(UserContext);
  }