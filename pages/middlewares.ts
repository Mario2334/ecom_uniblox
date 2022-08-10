import {NextApiResponse,NextApiRequest} from "next";
import expressJwt from "express-jwt";
import util from "util"

export function jwtMiddleware(req: NextApiRequest, res: NextApiResponse) {
    // @ts-ignore
    const middleware = expressJwt.expressjwt({ secret: process.env.SECRET_KEY.toString, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/api/users/login'
        ]
    });

    res.end(middleware);
}
