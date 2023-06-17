import Query from '../../../../Models/Query';
import connectToDb from '../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        const {adminPin, id} = req.body;
        if(adminPin!=process.env.NEXT_ADMIN_PIN){
            return res.json({ success: false, msg: "Not authenticated" })
        }
        let query = await Query.findOne({_id:id});
        if (query) {
            return res.json({ success: true, msg: 'Query fetched', query: query })
        } else {
            return res.json({ success: false, msg: "Something went wrong" })
        }

    } catch (error) {
        return res.json({ success: false, msg: error.message })
    }
}

export default add;