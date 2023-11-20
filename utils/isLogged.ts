import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import connectDB from "@/config/db";
import User from "@/model/User";

export const isLogged = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB();
    const token = req.headers.authorization!;
    if (token === "null" || token === "") {
      return res.status(400).json({ success: false, message: "Access Denied" });
    }
    const userId: any = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY!);
    const user = await User.findOne({ _id: userId.id }).select("-password");
    return user;
  } catch (error: any) {
    console.log(error.message)
  }
};