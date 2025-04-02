
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../api/authApi";
import { UserContext } from "../context/UserContext";

export default function Register() {

    const navigate = useNavigate()
    const {register} = useRegister()
    const {userLoginHandler} = useContext(UserContext)

    const registerHandler = async (formData) => {
        const { email, password } = Object.fromEntries(formData);

        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            console.log('Password missmatch');

            return;
        }

        const authData = await register(email, password);

        userLoginHandler(authData);

        navigate('/');
    }

    return (
        <div className="flex justify-center items-center h-screen bg-orange-100">
            <div className="bg-orange-200/60 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Register</h2>
                <form action={registerHandler} className="space-y-4">
                    <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded-md"  autoComplete="email"/>
                    <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded-md" autoComplete="password" />
                    <input type="password" name="confirm-password" placeholder="Confirm Password" className="w-full p-2 border rounded-md" autoComplete="confirmed-password" />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Register</button>
                </form>
                <p className="text-sm text-center mt-3">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
            </div>
        </div>
    );
}
