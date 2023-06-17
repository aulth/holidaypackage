import Widget from '../../../../../Models/Widget';
import connectToDb from '../../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        let { data, adminPin, edit } = req.body;
        if (adminPin != process.env.NEXT_ADMIN_PIN) {
            return res.json({ success: false, msg: "Not Authenticated" })
        }
        let widget = await Widget.findOneAndUpdate({_id:'648c067cbd4bf17f2476cfe1'}, data)
        if (widget) {
            return res.json({ success: true, msg: 'Updated successfully' })
        }
    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error.message })
    }
}
export default add