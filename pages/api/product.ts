import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";


export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    const prisma = new PrismaClient()

    let products = await prisma.product.findMany();
    return res.status(200).json(products);
}
