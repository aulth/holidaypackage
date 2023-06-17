import connectToDb from "../../../../middleware/connectToDb";
import Article from "../../../../Models/Article";
import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

connectToDb();

export default async function handler(req, res) {
  if (req.method != "POST") {
    return NextResponse.json({ success: false, msg: "Method not allowed" });
  }

  const { link } = req.body;
  const article = await Article.findOne({ link: link });

  if (!article) {
    return NextResponse.json({ success: false, msg: "Article Not found" });
  }

  return NextResponse.json({ success: true, msg: "Article Found", article: article });
}
