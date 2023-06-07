import Visas from '../../../../Models/Visas';
import connectToDb from '../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        console.log(req.body)
        console.log(req.body)
        let { data, adminPin } = req.body;
        data.link = data.title.toLowerCase().replace(/[:,']/g, '').split(/\s+/).join('-');
        if (adminPin != process.env.NEXT_ADMIN_PIN) {
            return res.json({ success: false, msg: "Not Authenticated" })
        }
        let newVisa = await Visas.create(data)
        if (newVisa) {
            return res.json({ success: true, msg: 'Added successfully' })
        } else {
            return res.json({ success: false, msg: "Something went wrong" })
        }

    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error.message })
    }
}

export default add;