import Widget from '../../../../../Models/Widget';
import connectToDb from '../../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        let widget = await Widget.create(req.body)
        if (widget) {
            return res.json({ success: true, msg: 'Added successfully' })
        }
    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error.message })
    }
}
export default add