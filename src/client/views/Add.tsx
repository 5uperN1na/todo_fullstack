import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { ITodo, ICategory } from '../utils/interfaces';
import Navbar from '../components/Navbar';
import apiService from '../utils/api-service';


const Add: React.FC<AddProps> = (props) => {

    const history = useHistory();

    const [task, setTask] = useState<string>('');

    const [selectedCategoryId, setSelectedCategoryId] = useState<string>('0');

    const [categories, setCategories] = useState<ICategory[]>([]);


    useEffect(() => {
        const getCategories = async () => {

            const categories = await apiService('/api/categories');

            setCategories(categories);

        }

        getCategories();

    }, []);


    const addTodo = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const todoPost = await apiService('/api/todos', 'POST', { categoryid: selectedCategoryId, task });


        console.log({ task });

        history.push('/');
    };

    return (

        <div className="col-md-7">

            <Navbar />

            <form className="form-group p-3 border-primary rounded-lg">

                <label>Todo Category</label>
                <select value={selectedCategoryId} onChange={e => setSelectedCategoryId(e.target.value)} className="form-control my-1">
                    <option value="0">Select User...</option>
                    {categories.map(category => (
                        <option key={`user-option-${category.id}`} value={category.id}>{category.name}</option>
                    ))}
                </select>

                <label>Todo Task </label>
                <textarea value={task} onChange={e => setTask(e.target.value)} rows={5} className="form-control my-1" />

                <button onClick={addTodo} className="btn btn-primary btn-block w-50 mx-auto mt-3"> Add Todo</button>

            </form>
        </div>

    );
};

interface AddProps {
}

export default Add;