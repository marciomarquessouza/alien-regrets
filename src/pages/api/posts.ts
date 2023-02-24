import dbClient from "../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await dbClient;
    const db = client.db("posts");

    switch (req.method) {
      case "POST":
        const { title, content } = req.body;
        const post = await db.collection("posts").insertOne({
          title,
          content,
        });
        res.json(post);
        break;
      case "GET":
        const posts = await db.collection("posts").find({}).limit(20).toArray();
        res.json(posts);
      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
}
