import React, { useState } from 'react';
import authService from '../appwrite/auth.js';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice.js';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(login(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-blue-50 rounded-lg shadow-lg p-8 border border-blue-200">
                <div className="mb-4 flex justify-center">
                    <span className="inline-block w-24">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-4">Sign up to create account</h2>
                <p className="text-center text-sm text-gray-600 mb-6">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-blue-600 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className="space-y-4">
                        <Input
                            label="Full Name:"
                            placeholder="Enter your full name"
                            className="placeholder-gray-400 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            {...register("name", { required: true })}
                        />
                        <Input
                            label="Email:"
                            placeholder="Enter your email"
                            type="email"
                            className="placeholder-gray-400 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })}
                        />
                        <Input
                            label="Password:"
                            type="password"
                            placeholder="Enter your password"
                            className="placeholder-gray-400 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            {...register("password", { required: true })}
                        />
                        <Button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
