import Booking from '../../../../Models/Booking';
import connectToDb from '../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        console.log(req.body)
        const {data} = req.body;
        let bookingNumber = Math.floor(Math.random() * 1000000000);
        let newBooking = await Booking.create({
            bookingNumber,
            type:data.type,
            data:data,
            paymentCompleted:false,
            sessionId:null,
        })
        if (newBooking) {
            return res.json({ success: true, msg: 'Booking successfully', bookingNumber: bookingNumber })
        } else {
            return res.json({ success: false, msg: "Something went wrong" })
        }

    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error.message })
    }
}

export default add;