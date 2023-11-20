import { errorHandler } from "@/middleware/error";
import { isLogged } from "@/utils/isLogged";
import { NextApiRequest, NextApiResponse } from "next";
import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import History from "@/model/ChatHistory";


// Loaders
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { JSONLoader } from "langchain/document_loaders/fs/json";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { CSVLoader } from "langchain/document_loaders/fs/csv";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import path from "path";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    // Not Exist Method == POST Condition
    if (req.method !== "POST") {
        return errorHandler(res, 400, "ONLY POST METHOD IS ALLOWED");
    }
    try {

        const postsDirectory = path.join(process.cwd(), '/docs')

        const receiveData = req.body;

        const user = await isLogged(req, res);

        const loader = new DirectoryLoader(postsDirectory, {
            ".json": (path) => new JSONLoader(path),
            ".txt": (path) => new TextLoader(path),
            ".csv": (path) => new CSVLoader(path),
            ".pdf": (path) => new PDFLoader(path),
        });

        const docs = await loader.load();

        const csvContent = docs.map((doc) => doc.pageContent);

        const askModel = async (question:any) => {
            const model = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY });

            let vectorstore;

            const textSplitter = new RecursiveCharacterTextSplitter({
                chunkSize: 1000,
                chunkOverlap: 900,
            });

            const splitDoc = await textSplitter.createDocuments(csvContent);

            vectorstore = await HNSWLib.fromDocuments(
                splitDoc,
                new OpenAIEmbeddings()
            )

            await vectorstore.save("MyVector.index");

            const chain = RetrievalQAChain.fromLLM(model, vectorstore.asRetriever())

            const res = await chain.call({ query: question })

            return res.text
        };

        const responseData = await askModel(receiveData.prompt);

        console.log(user)

        const dataSave = new History({
            userId: user._id,
            prompt: receiveData.prompt,
            reply: responseData,
        });
        
        await dataSave.save();

        res.status(200).json({
            success: true,
            data: responseData
        });
    } catch (error: any) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export default handler;