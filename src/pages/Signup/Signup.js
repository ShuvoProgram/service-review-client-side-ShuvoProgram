import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { FcGoogle } from "react-icons/fc";
import registerAnimation from '../../assets/Animation/38435-register.json';
import { AuthProvider } from '../../context/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const Signup = () => {
    const { createUser, updateUserProfile, userLogIn } = useContext(AuthProvider);
    useTitle('SingUp')
    const navigate = useNavigate();
    const [accept, setAccept] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const googleProvider = new GoogleAuthProvider();

    const handleGoogle = () => {
        userLogIn( googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err))
    }
    
    const handleRegister = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
            // const user = result.user;
            updateProfile(name, photoURL)
            setError('')
            form.reset()
            // navigate('/login')
        })
        .catch(err => {
            setError(err.message)
        })
    }
    const updateProfile = (name, photoURL) => {
        const profile = {
            name: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(err => console.error(err))
    }

    const handleEmail = event => {
        const email = event.target.value;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setErrors({ ...errors, email: "Please Provide Valid Email" });
            setUserInfo({ ...userInfo, email: "" });

        } else {
            setErrors({ ...errors, email: "" });
            setUserInfo({ ...userInfo, email: event.target.value })
        }
    }

    const handlePassword = event => {
        const password = event.target.value;
        if (password.length < 8) {
            setErrors({ ...errors, password: "Must be at least 8 characters" });
            setUserInfo({ ...userInfo, password: "" })
        } else if (!/[\!\@\#\$\%\^\&\*]{1,}/.test(password)) {
            setErrors({ ...errors, password: "Must be at least One Symbolic characters" });
            setUserInfo({ ...userInfo, password: "" })
        } else if (!/[A-Z]{1,}/.test(password)) {
            setErrors({ ...errors, password: "Must be at least One UpperCase characters" });
            setUserInfo({ ...userInfo, password: "" })
        }
        else {
            setErrors({ ...errors, password: "" });
            setUserInfo({ ...userInfo, password: event.target.value })
        }
    }

    const handleTermsAndConditions = event => {
        setAccept(event.target.checked)
    }
    return (
        <div className='grid grid-cols-2 my-10'>
            <div>
                <Player
                    autoplay
                    loop
                    src={registerAnimation}
                    style={{ height: '400px', width: '400px' }}
                >
                    <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            <div className='max-w-md'>
                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            name='name'
                            type="text"
                            placeholder="Enter your Name"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="photoUrl"
                                value="Photo URL"
                            />
                        </div>
                        <TextInput
                            id="photourl"
                            type="text"
                            name='photourl'
                            placeholder="Enter your Photo URL"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email2"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email2"
                            type="email"
                            name='email'
                            placeholder="name@emal.com"
                            onChange={handleEmail}
                            required={true}
                            shadow={true}
                        />
                        <>{
                            errors.email && <p className='text-red-600'>{errors.email}</p>
                        }
                        </>
                    </div>
                    <div>
                        <div className="mb-2 block relative">
                            <Label
                                htmlFor="password2"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password2"
                            type={showPass ? 'text' : 'password'}
                            name='password'
                            onChange={handlePassword}
                            required={true}
                            shadow={true}
                        />
                        <>
                            {errors.password && <p className='text-red-600'>{errors.password}</p>}
                        </>
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" onClick={handleTermsAndConditions} />
                        <Label htmlFor="agree">
                            I agree with the{' '}
                            <Link
                                href="/forms"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                terms and conditions
                            </Link>
                        </Label>
                    </div>
                    <Button type="submit" disabled={!accept}>
                        Register new account
                    </Button>
                </form>
                <div className='my-4'>
                    <span className='mr-2'>Have you Already Account?</span>
                    <Link to='/login'>login</Link>
                </div>
                <div>
                    <FcGoogle className='h-10 w-10 mx-auto cursor-pointer' onClick={handleGoogle}/>
                </div>
            </div>
        </div>
    );
};

export default Signup;