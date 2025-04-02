const baseUrl = 'http://localhost:3030/users';

export const useRegister = () => {
    const register = async (email, password) => {
        try {
            const response = await fetch(`${baseUrl}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Registration failed");
            }

            const result = await response.json();
            return result;

        } catch (error) {
            console.error("Error registering user:", error);
            throw error;
        }
    };

    return { register };
};
export const useLogin = () => {
    const login = async (email, password) => {
        const response = await fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        
        const result = await response.json();
        return result;
    }
        return { login };
};
