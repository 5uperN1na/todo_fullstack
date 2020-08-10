import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import apiService from '../utils/api-service';


const Register: React.FC<RegisterProps> = (props) => {

    const location = useLocation<{ msg: string }>();

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const register = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const token = await apiService('/auth/register', 'POST', {email, password, name});
        // const res = await fetch('/auth/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ name, email, password })
        // });
        // const token = await res.json();
        console.log(token);
        localStorage.setItem('token', token);
    }


    return (
        <main className="container">
            <Navbar />
            <section className="row justify-content-center mt-3">


                <form className="form-group p-3 border-primary rounded-lg bg-lightgray">

                    <div className="shadow p-4 mb-4 bg-white">
                        <h3 className="text-center"> Register </h3>

                        <label>Name</label>
                        <input value={name} onChange={e => setName(e.target.value)} className="form-control my-1" />
                    

                        <label>Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} className="form-control my-1" />

                        <label>Password</label>
                        <input value={password} onChange={e => setPassword(e.target.value)} className="form-control my-1" />

                        <button onClick={register} className="btn btn-primary btn-block w-30 mx-auto mt-3">Submit</button>

                    </div>

                </form>


            </section>

        </main>
    );
}

interface RegisterProps {

}


export default Register;