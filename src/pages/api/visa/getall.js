import Visas from '../../../../Models/Visas';
import connectToDb from '../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'GET') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        let visas = await Visas.find({});
        if (visas) {
            return res.json({ success: true, msg: 'Packages fetched', visas: visas })
        } else {
            return res.json({ success: false, msg: "Something went wrong" })
        }

    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error.message })
    }
}

export default add;