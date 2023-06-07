import Booking from '../../../../Models/Booking';
import connectToDb from '../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        console.log(req.body)
        const {sessionId} = req.body;
        let updatedBooking = await Booking.findOneAndUpdate({sessionId:sessionId}, {
            paymentCompleted:true
        })
        updatedBooking = await Booking.findOne({sessionId:sessionId});
        if (updatedBooking) {
            return res.json({ success: true, msg: 'Payment Successfull', data:updatedBooking })
        } else {
            return res.json({ success: false, msg: "Something went wrong" })
        }

    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error.message })
    }
}

export default add;