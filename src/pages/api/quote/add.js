import Quote from '../../../../Models/Quote';
import connectToDb from '../../../../middleware/connectToDb';
connectToDb();

const add = async (req, res) => {
    try {
        if (req.method != 'POST') {
            return res.json({ success: false, msg: "Method not allowed" })
        }
        console.log(req.body)
        const {data, adminPin} = req.body;
        if(adminPin!=process.env.NEXT_PUBLIC_ADMIN_PIN){
            return res.json({ success: false, msg: "Not authenticated" })
        }
        let newQuote = await Quote.create(data)
        if (newQuote) {
            return res.json({ success: true, msg: 'Quote received', newQuote: newQuote })
        } else {
            return res.json({ success: false, msg: "Something went wrong" })
        }

    } catch (error) {
        return res.json({ success: false, msg: error.message })
    }
}

export default add;