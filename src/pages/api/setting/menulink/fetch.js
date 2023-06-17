import Menulink from '../../../../../Models/Menulink';
import connectToDb from '../../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'GET') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        let menuLink = await Menulink.find({});
        if (menuLink) {
            return res.json({ success: true, msg: 'Link fetched', menuLink: menuLink[0] })
        } else {
            return res.json({ success: false, msg: "Something went wrong" })
        }

    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error.message })
    }
}

export default add;