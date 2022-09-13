import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/auth';


const Login = () => {
    const { signed, Login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });
    console.log(signed);
    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    async function handleLogin() {
        
        await Login(formData)  
    };


    return (
        <div className='container-login container mt-5'>
            <h1 className='mb-5'>Login</h1>
            
            <form >
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group mt-2'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-dark mt-2' onClick={handleLogin}>Login</button>
            </form>
            
            <p className='mt-3 mb-1'>
                Não tem cadastro ? <Link to='/signup'>Cadastre-se</Link>
            </p>
        </div>
    );
};


export default Login;