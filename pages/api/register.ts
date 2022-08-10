import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";

type RegisterData = {
    email: string,
    password: string,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let regData: RegisterData = req.body;
    const prisma = new PrismaClient()

    let user = await prisma.user.create({data: {email: regData.email, password: regData.password}});
    res.status(200).end()
}
