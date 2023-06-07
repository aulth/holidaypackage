import Visas from '../../../../Models/Visas';
import connectToDb from '../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        console.log(req.body)
        const {link} = req.body;
        let data = await Visas.findOne({link:link});
        console.log(order)
        if (data) {
            return res.json({ success: true, msg: 'Booking fetched', 'visa': data })
        } else {
            return res.json({ success: false, msg: "Something went wrong" })
        }

    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error.message })
    }
}

export default add;