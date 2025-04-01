import { useState } from "react";
import { useNavigate, useParams } from 'react-router'
import petService from "../../services/petService";

export default function DeletePet({
    name,
    onClose,
}) {

    const navigate = useNavigate()
    const { petId } = useParams()

    const confirmDeleteClickHandler =  async () => {
        
        await petService.deletePetById(petId)
        navigate('/pets')
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}>
            <div
                className="bg-orange-300/80 p-6 rounded-lg shadow-lg max-w-sm w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-semibold text-gray-900">Delete Pet</h2>
                <p className="text-gray-600 mt-2">
                    Are you sure you want to delete <span className="font-bold">{name}</span>?
                    This action cannot be undone.
                </p>

                <div className="mt-4 flex justify-end gap-3">
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                        onClick={confirmDeleteClickHandler}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
