// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDb from "../../../../middleware/connectToDb";
import Article from "../../../../Models/Article";

connectToDb();
export default async function handler(req, res) {
    try {
      if (req.method !== "POST") {
        return res.status(405).json({ success: false, msg: "Method not allowed" });
      }
  
      const { link } = req.body;
  
      const article = await Article.findOne({ link }).select({ _id: 0, __v: 0 });
  
      if (!article) {
        return res.json({ success: false, msg: "Article not found" });
      }
  
      return res.json({ success: true, msg: "Article found", article });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
  }

  
  
  
  
  