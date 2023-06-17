import Menulink from '../../../../../Models/Menulink';
import connectToDb from '../../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        let menuLink = await Menulink.create(req.body)
        if (menuLink) {
            return res.json({ success: true, msg: 'Added successfully' })
        }
    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error.message })
    }
}
export default add