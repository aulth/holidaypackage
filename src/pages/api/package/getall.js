import Packages from '../../../../Models/Packages';
import connectToDb from '../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'GET') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        let packages = await Packages.find({});
        if (packages) {
            return res.json({ success: true, msg: 'Packages fetched', packages: packages })
        } else {
            return res.json({ success: false, msg: "Something went wrong" })
        }

    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error.message })
    }
}

export default add;