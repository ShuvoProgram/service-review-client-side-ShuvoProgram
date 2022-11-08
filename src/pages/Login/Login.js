import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import loginAnimation from '../../assets/Animation/106680-login-and-sign-up.json';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Login = () => {
    const {user, login } = useContext(AuthProvider);
    const [loading, setLoading] = useState(true);

    const [showPass, setShowPass] = useState(false);
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })
    const [userInfo, setUserInfo] = useState({
        password: ""
    })
    const navigate = useNavigate();
    const location = useLocation();

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
        })
        .catch(err => {
            setErrors({ ...errors, password: "Wrong Password!" });
        })
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
            </div>
        </div>
    );
};

export default Login;