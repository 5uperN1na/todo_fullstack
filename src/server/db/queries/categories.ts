import { Query } from '../index';

//GET all categories by id and name
const all = () => Query('SELECT categories.id, categories.name FROM categories');

//GET one category by id
const one = (id: number) => Query('SELECT * FROM categories WHERE id = ?', [id]);

//POST a new category
const insert = (id: number, name: string) => {
    return Query('INSERT INTO categories (id, name) VALUE (?, ?, ?)', [id, name]);
};

//DELETE category from id passed
const deleteCategory = (id: number) => Query('DELETE FROM categories WHERE id = ?', [id]);


//PUT or edit a category
const edit = (id: number, name: string ) => Query('UPDATE categories SET name = ? WHERE id = ?', [name, id]);


const find = (column: string, value: number | string) => Query('SELECT * FROM categories WHERE ?? = ?', [column, value]);
 


export default{
    all,
    one,
    insert,
    deleteCategory,
    edit,
    find
    
 }