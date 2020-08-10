import { Query } from '../index';

//GET all users (email and name) from users table
const all = () => Query('SELECT users.email, users.name FROM users');

//GET one user from users table
const one = (id: number) => Query('SELECT * FROM users WHERE id = ?', [id]);

//POST a new users
const insert = (email: string, password: string, name: string) => {
    return Query('INSERT INTO users (email, password, name) VALUE (?, ?, ?)', [email, password, name]);
};

//DELETE user from id passed
const deleteUser = (id: number) => Query('DELETE FROM users WHERE id = ?', [id]);


//PUT or edit a user
const edit = (id: number, email: string, name: string ) => Query('UPDATE users SET email = ?, name = ? WHERE id = ?', [email, name, id]);

const find = (column: string, value: number | string) => Query('SELECT * FROM users WHERE ?? = ?', [column, value]);
 


export default{
    all,
    one,
    insert,
    deleteUser,
    edit,
    find
    
 }