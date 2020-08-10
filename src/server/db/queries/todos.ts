import { Query } from '../index';

//GET all columns- categories and todos based off categoryid and categories.id
const all = () => Query('SELECT todo.*, categories.name from todo JOIN categories on categories.id=todo.categoryid ORDER BY todo.created_at DESC');

//GET all columns- categories and todos based off categoryid and categories.id based off of one todo id
const one = (id: number) => Query('SELECT todo.*, categories.name from todo JOIN categories on categories.id=todo.categoryid WHERE todo.id = ?', [id]);


//DELETE todo from id passed
const deleteTodo = (id: number) => Query('DELETE FROM todo WHERE id = ?', [id]);

// //POST a new todo
// const insert = (task: string, userid: number) => {
//     return Query('INSERT INTO todo (task, userid) VALUE (?, ?)', [task, userid]);
// };


// const insert = (newTodo: any) => Query('INSERT INTO todo SET ?', newTodo);


const insert = (categoryid: number, task: string) => {
    return Query('INSERT INTO todo (categoryid, task) VALUE (?, ?)', [categoryid, task]);
};


//PUT or edit a todo
const edit = (id: number, categoryid: number, task: string) => Query('UPDATE todo SET categoryid = ?, task = ? WHERE id = ?', [categoryid, task, id]);




export default{
    all,
    one,
    deleteTodo,
    edit,
    insert
   
}