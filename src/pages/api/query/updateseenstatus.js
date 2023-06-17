import Query from '../../../../Models/Query';
import connectToDb from '../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        const {id} = req.body;
        let updateQuery = await Query.findOneAndUpdate({_id:id}, {
            seen:true
        })
        if (updateQuery) {
            return res.json({ success: true, msg: 'Seen' })
        } else {
            return res.json({ success: false, msg: "Something went wrong" })
        }

    } catch (error) {
        return res.json({ success: false, msg: error.message })
    }
}

export default add;