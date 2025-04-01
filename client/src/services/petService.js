import EditPet from "../components/editPet/EditPet";

const baseUrl = 'http://localhost:3030/jsonstore/pets'

export default {
    async getAll() {
        try {
            const response = await fetch(baseUrl);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return Object.values(data);

        } catch (error) {
            console.error("Fetch Error:", error);
            throw error;
        }

    },
    async getPetById(petId) {
        try {
            const response = await fetch(`${baseUrl}/${petId}`);

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return data;

        } catch (error) {
            console.error("Fetch Error:", error);
            throw error;
        }
    },
    async createPet(petData) {
        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(petData),
            });

            const result = await response.json();
            return result;

        } catch (error) {
            console.error("Fetch Error:", error);
            throw error;
        }
    },
    async editPet(petId, petData) {
        try {
            const response = await fetch(`${baseUrl}/${petId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(petData),
            });

            const result = await response.json();
            return result;

        } catch (error) {
            console.error("Fetch Error:", error);
            throw error;
        }
    },
    async deletePetById(petId) {
        try {
            const response = await fetch(`${baseUrl}/${petId}`, {
                method: 'DELETE',
            });
    
            const result = await response.json();
    
            return result;

        } catch (error) {
            console.error("Fetch Error:", error);
            throw error;
        }
    },
}