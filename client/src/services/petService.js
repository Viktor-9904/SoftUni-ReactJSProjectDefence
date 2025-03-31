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
    }
}