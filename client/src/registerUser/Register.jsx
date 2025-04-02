
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        
        // Simulate registration logic
        console.log("User registered: ", formData);
        navigate("/login");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-orange-100">
            <div className="bg-orange-200/60 p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Register</h2>
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="username" placeholder="Username" className="w-full p-2 border rounded-md" value={formData.username} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded-md" value={formData.email} onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" className="w-full p-2 border rounded-md" value={formData.password} onChange={handleChange} required />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full p-2 border rounded-md" value={formData.confirmPassword} onChange={handleChange} required />
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Register</button>
                </form>
                <p className="text-sm text-center mt-3">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
            </div>
        </div>
    );
}
