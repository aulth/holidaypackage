import Packages from '../../../../Models/Packages';
import connectToDb from '../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }

        const {id, adminPin, data} = req.body;
        if(adminPin!=process.env.NEXT_ADMIN_PIN){
            return res.json({ success: false, msg: "Not authenticated" })
        }
        let updatedPackage = await Packages.findOneAndUpdate({_id:id}, data)
        if (updatedPackage) {
            return res.json({ success: true, msg: 'Updated' })
        } else {
            return res.json({ success: false, msg: "Something went wrong" })
        }

    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error.message })
    }
}

export default add;