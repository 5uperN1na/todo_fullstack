
import { Request } from 'express';

export interface IPayload {
    userid: number;
}

export interface ReqUser extends Request {
    user: {
        id: number;
    }
}