import { errorHandler } from "@/middleware/error";
import History from "@/model/ChatHistory";
import { isLogged } from "@/utils/isLogged";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    // Not Exist Method == GET Condition
    if (req.method !== "GET") {
        return errorHandler(res, 400, "ONLY GET METHOD IS ALLOWED");
    }
    try {
        const user = await isLogged(req, res);

        const data = await History.find({userId: user._id})

        res.status(200).json({
            success: true,
            data: data
        });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export default handler;