import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import apiService from '../utils/api-service';


const Login: React.FC<LoginProps> = (props) => {

    const history = useHistory();

    const location = useLocation<{ msg: string }>();


    const [email, setEmail] = useState<string>('vivien@test.com');
    const [password, setPassword] = useState<string>('abc');

    const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const token = await apiService('/auth/login', 'POST', { email, password });

        // const res = await fetch('/auth/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ email, password })
        // });
        // const token = await res.json();
        localStorage.setItem('token', token);
        history.push('/');
    }


    return (
        <main className="container">
            <Navbar />
            <section className="row justify-content-center mt-3">


                <form className="form-group p-3 border-primary rounded-lg bg-lightgray">

                    <div className="shadow p-4 mb-4 bg-white">
                        <h3 className="text-center"> Login </h3>

                        <label>Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} className="form-control my-1" />
                        <label>Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} className="form-control my-1" />

                        <button onClick={login} className="btn btn-primary btn-block w-30 mx-auto mt-3">Submit</button>

                    </div>

                </form>


            </section>

        </main>
    );
}



interface LoginProps { }

export default Login;