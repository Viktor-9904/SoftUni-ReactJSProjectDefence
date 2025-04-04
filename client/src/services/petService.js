import { useContext } from "react";
import EditPet from "../components/editPet/EditPet";
import { UserContext } from "../context/UserContext";

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
    async createPet(petData, userId) {
        try {
            const processedPetData = {
                ...petData,
                createdOn: new Date().toISOString(),
                ownerId: userId
            };

            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(processedPetData),
            });

            const result = await response.json();
            return result;

        } catch (error) {
            console.error("Fetch Error:", error);
            throw error;
        }
    },
    async editPet(petId, petData, userId) {
        try {

            const processedPetData = {
                ...petData,
                ownerId: userId
            };

            const response = await fetch(`${baseUrl}/${petId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(processedPetData),
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