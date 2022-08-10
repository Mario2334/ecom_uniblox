import {NextApiRequest, NextApiResponse} from "next";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";


type LoginData = {
    email: string,
    password: string,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let loginData: LoginData = req.body
    const prisma = new PrismaClient()

    let user = await prisma.user.findUnique({
        where: {
            email: loginData.email
        }
    });
    if (user == null) return res.status(404).send({message: "User Not Found"});

    if(user.password != loginData.password) return res.status(404).send({message: "Invalid Password"});
    // @ts-ignore
    const token = jwt.sign({ sub: user.id }, process.env.SECRET_KEY, { expiresIn: '7d' });

    res.status(200).json({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token
    });
}
