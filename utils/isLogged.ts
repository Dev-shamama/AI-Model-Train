import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import connectDB from "@/config/db";
import User from "@/model/User";
import cookie from "cookie";
import { decode } from 'next-auth/jwt';

export const isLogged = async (req: NextApiRequest, res: NextApiResponse) => {
  try {

    const sessionToken = req.cookies['next-auth.session-token'];

    const userDetail:any = await decode({
      token: sessionToken,
      secret: process.env.NEXT_PUBLIC_SECRET_KEY!,
    });

    const user = await User.findOne({ _id: userDetail.sub }).select("-password");
    
    console.log(user);

    return user;
  } catch (error: any) {
    console.log(error)
  }
};