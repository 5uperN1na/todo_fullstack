
import * as React from 'react';
import {useState, useEffect } from 'react';
import moment from 'moment';
import {useParams, useHistory, Link} from 'react-router-dom';
import { ITodo } from '../utils/interfaces';
import Navbar from '../components/Navbar';
import apiService from '../utils/api-service';

const Details: React.FC<DetailsProps> = (props) => {

const {todoid } = useParams();
const history = useHistory();

const [todo, setTodo] = useState<ITodo>();

useEffect(() => {
    const getTodo = async () => {
        const todo = await apiService(`/api/todos/${todoid}`);
        setTodo(todo);
    };
    getTodo();

},[todoid]);


//Delete todo


const deleteTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {

    const todoDelete = await apiService(`/api/todos/${todoid}`, 'DELETE');

    history.push('/');

};



return (
    <main className="container">
        <Navbar />
        <section className="row justify-content-center mt-3">


            <div className="col-md-7">
                <div className="card-header bg-info text-white my-2"> {todo?.task}</div>
            
                <div className="card-body bg-success">
                    <h6 className="card-title">{todo?.completed}</h6>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <p><i>{moment(todo?.created_at).format("MMM Do YYYY")}</i></p>
                    <button onClick={() => history.push('/')} className="btn btn-info btn-sm">Go Back</button>

                    <button onClick={() => deleteTodo(todoid)} className="btn btn-danger btn-sm">Delete</button>
                    <Link to={`/edit/${todoid}`} className="btn btn-warning btn-sm">Edit</Link>
              
                </div>
            </div>


        </section>

    </main>
);
}

interface DetailsProps {

}

export default Details;
