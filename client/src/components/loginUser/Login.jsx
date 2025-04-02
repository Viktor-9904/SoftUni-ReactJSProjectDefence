import { useActionState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useLogin } from "../../api/authApi";

export default function Login() {

    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login } = useLogin();

    const loginHandler = async (_, formData) => {
        const values = Object.fromEntries(formData);

        const authData = await login(values.email, values.password);

        userLoginHandler(authData);

        navigate('/');
    };

    const [_, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });

    return (
        <div className="flex justify-center items-center h-screen bg-orange-100">
            <div className="bg-orange-200/60 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Login</h2>
                <form action={loginAction} className="space-y-4">
                    <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded-md" autoComplete="email" />
                    <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded-md" autoComplete="password" />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition" disabled={isPending} >Login</button>
                </form>
                <p className="text-sm text-center mt-3">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></p>
            </div>
        </div>
    );
}
