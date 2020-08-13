
import * as React from 'react';
import {useState, useEffect } from 'react';
import type { ITodo, ICategory } from '../utils/interfaces';
import Display from '../components/Display';
import Navbar from '../components/Navbar';
import apiService from '../utils/api-service';

const Home: React.FC<HomeProps> = (props) => {

    const [todos, setTodos] = useState<ITodo[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);

    const getData = async () => {

        const categories = await apiService('/api/categories');
        const todos = await apiService('/api/todos');
        setTodos(todos);
        setCategories(categories);
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <main className="container">
              <Navbar />
            <section className="row justify-content-center mt-3">

            </section>

            <section className="row justify-content-center mt-3">

                {todos.map(todo => (
                    <Display key={`display-card-${todo.id}`} todo={todo} />

                ))}
            </section>

        </main>
    );
}

interface HomeProps {}

export default Home;