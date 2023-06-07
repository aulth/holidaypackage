import Booking from '../../../../Models/Booking';
import connectToDb from '../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        console.log(req.body)
        const {adminPin, bookingNumber} = req.body;
        if(adminPin!=process.env.NEXT_ADMIN_PIN){
            return res.json({ success: false, msg: "Not authenticated" })
        }
        let order = await Booking.findOne({bookingNumber:bookingNumber});
        console.log(order)
        if (order) {
            return res.json({ success: true, msg: 'Booking fetched', order: order })
        } else {
            return res.json({ success: false, msg: "Something went wrong" })
        }

    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error.message })
    }
}

export default add;