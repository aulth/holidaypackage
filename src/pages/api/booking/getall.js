import Booking from '../../../../Models/Booking';
import connectToDb from '../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        console.log(req.body)
        const {adminPin} = req.body;
        console.log(req.body)
        if(adminPin!=process.env.NEXT_ADMIN_PIN){
            return res.json({ success: false, msg: "Not authenticated" })
        }
        let orders = await Booking.find({});
        if (orders) {
            return res.json({ success: true, msg: 'Booking fetched', orders: orders })
        } else {
            return res.json({ success: false, msg: "Something went wrong" })
        }

    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error.message })
    }
}

export default add;