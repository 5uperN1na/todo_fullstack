import * as mysql from 'mysql';
import config from '../config';
import todos from './queries/todos';
import users from './queries/users';
import categories from './queries/categories';
import { rejects } from 'assert';
import { resolve } from 'path';


//new sql connection with .env

const pool = mysql.createPool(config.mysql);


//Query helper function

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        const sql = mysql.format(query, values);

        pool.query(query, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};



export default {
 todos,
 users,
 categories

}