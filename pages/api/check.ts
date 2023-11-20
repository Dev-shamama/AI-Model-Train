import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // Not Exist Method == POST Condition
        if (req.method !== "GET") {
            return res.status(400).json({ success: false, message: "METHOD NOT ALLOWED" });
        }

        return res.status(201).json({ success: true, message: "Account Created Successfully"});
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export default handler;