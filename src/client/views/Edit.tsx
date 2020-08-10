import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import moment from 'moment';
import type { ITodo,  ICategory } from '../utils/interfaces';
import Navbar from '../components/Navbar';
import apiService from '../utils/api-service';


const Edit: React.FC<EditProps> = (props) => {

    const { todoid } = useParams();

    const history = useHistory();

    const [task, setTask] = useState<string>('');

    const [categories, setCategories] = useState<ICategory[]>([]);

    const [selectedCategoryId, setSelectedCategoryId] = useState<string>('0');

    useEffect(() => {
        const getData = async () => {

            const categories = await apiService('/api/categories');
            const todo = await apiService(`/api/todos/${todoid}`);

            setTask(todo.task);
            setSelectedCategoryId(todo.categoryid);

            setCategories(categories);

        }

        getData();

    }, []);


    const editTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const pizza = await apiService(`/api/todos/${todoid}`, 'PUT', { categoryid: selectedCategoryId, task });
        
        history.push('/');

    }

    return (
        <main className="container">


            <Navbar />
            <section className="row justify-content-center mt-3">

                <div className="col-6">
                    <form className="form-group p-3 border-primary rounded-lg bg-lightgray">

                        <div className="shadow p-4 mb-4 bg-white">
                            <h3 className="text-center"> Edit Todo</h3>

                            <label>Todo Category</label>
                            <select value={selectedCategoryId} onChange={e => setSelectedCategoryId(e.target.value)} className="form-control my-1">
                                <option value="0">Select Category...</option>
                                {categories.map(category => (
                                    <option key={`user-option-${category.id}`} value={category.id}>{category.name}</option>
                                ))}
                            </select>


                            <label>Todo Task</label>
                            <textarea value={task} onChange={e => setTask(e.target.value)} rows={3} className="form-control my-1" />

                            <button onClick={editTodo} className="btn btn-primary btn-block w-30 mx-auto mt-3"> Save</button>


                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <Link to={`/details/${todoid}`} className="btn btn-info btn-sm">Go Back</Link>

                        </div>
                    </form>


                </div >


            </section>

        </main >
    );
}

interface EditProps { }

export default Edit;