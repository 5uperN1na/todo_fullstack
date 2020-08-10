import * as jwt from 'jsonwebtoken';
import config from '../config';
import type { IPayload } from './types';

export const createToken = (payload: IPayload) => {

    const token = jwt.sign(payload, config.auth.secret);
    return token;

    //make sure to change the second argument in the future.  HAVE TO FIX .ENV FILE!
    // const token = jwt.sign(payload, 'green', {expiresIn: '7d'});
    // return token;

}

