import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import loginAnimation from '../../assets/Animation/106680-login-and-sign-up.json';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import useTitle from '../../hooks/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    useTitle('Login')
    const { user, login, userLogIn } = useContext(AuthProvider);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const location = useLocation();

    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setErrors({ ...errors, password: "" });
            navigate(from, { replace: true })
        })
        .catch(err => {
            setErrors({ ...errors, password: "Wrong Password!" });
        })
    }

    

    const handleGoogle = () => {
        userLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        if(user && loading) {
            navigate('/')
        }
    }, [user, loading, navigate])

    return (
        <div className='grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-10'>
            <div>
                <Player
                    autoplay
                    loop
                    src={loginAnimation}
                    style={{ height: '400px', width: '400px' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            <div className='max-w-md mt-8'>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        name='email'
                        placeholder="name@email.com"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        name='password'
                        required={true}
                    />
                </div>
                <div className="flex items-center justify-end gap-2">
                        <Link to='/signup'>Forget Password?</Link>
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>
                <div className='my-4'><span className='mr-2'>
                    Are You Existing User?
                </span>
                    <Link to='/signup'>Create an new account</Link>
                </div>
                <div className='bg-sky-500 flex items-center p-2 w-52 rounded-lg cursor-pointer' onClick={handleGoogle}>
                    <span className='font-semibold'>Google Log</span>
                    <FcGoogle className='h-8 w-8 mx-auto' />
                </div>
            </div>
        </div>
    );
};

export default Login;