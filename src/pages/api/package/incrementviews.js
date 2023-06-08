import Packages from '../../../../Models/Packages';
import connectToDb from '../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        const {link} = req.body;
        let data = await Packages.findOne({link:link});
        if(data){
            data = await Packages.findOneAndUpdate({link:link}, {
                views:data.views?data.views:0 + 1
            })
        }
        if (data) {
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