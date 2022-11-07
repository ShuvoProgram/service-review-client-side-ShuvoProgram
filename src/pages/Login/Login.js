import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthProvider } from '../../context/AuthContext';

const Login = () => {
    const { login } = useContext(AuthProvider);

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
    }

    return (
        <div className='grid grid-cols-2 my-10'>
            <div>
                <h className="text-5xl bold">img</h>
            </div>
            <div className='max-w-md'>
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
                        placeholder="name@flowbite.com"
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
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">
                        Remember me
                    </Label>
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form></div>
        </div>
    );
};

export default Login;