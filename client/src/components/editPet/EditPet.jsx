import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import petService from '../../services/petService'

export default function EditPet(
    {
        onClose,
        onSubmit,
    }) {

    const navigate = useNavigate()
    const { petId } = useParams()
    const [pet, setPet] = useState({})

    useEffect(() => {
        petService.getPetById(petId)
            .then(setPet)
    }, [petId])

    const formAciton = async (formData) => {
        const petData = Object.fromEntries(formData)

        await petService.editPet(petId, petData)

        navigate(`/pets/details/${petId}`);

        onSubmit()
        onClose()
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50 bg-orange-300/50" onClick={onClose}>
            <div
                className="bg-orange-300/80 rounded-lg shadow-lg p-6 w-full max-w-md relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
                    onClick={onClose}
                >
                    ✕
                </button>

                <h2 className="text-xl font-semibold text-center text-gray-900">
                    Edit Pet Details
                </h2>

                <form className="mt-4 grid gap-4" action={formAciton}>
                    <input type="text" name="name" placeholder="Pet Name" className="w-full p-2 border rounded-md shadow-sm" defaultValue={pet.name} />

                    <input type="text" name="species" placeholder="Cat, Dog, Rabbit, Fish, etc..." className="w-full p-2 border rounded-md shadow-sm" defaultValue={pet.species} />

                    <input type="text" name="breed" placeholder="Breed" className="w-full p-2 border rounded-md shadow-sm" defaultValue={pet.breed} />

                    <input type="number" name="age" placeholder="Age (years)" className="w-full p-2 border rounded-md shadow-sm" defaultValue={pet.age} />

                    <input type="text" name="gender" placeholder="Male/Female" className="w-full p-2 border rounded-md shadow-sm" defaultValue={pet.gender} />

                    <textarea name="description" placeholder="Describe the pet..." className="w-full p-2 border rounded-md shadow-sm resize-none" rows="3" defaultValue={pet.description}></textarea>

                    <input type="text" name="imageUrl" placeholder="Photo URL" className="w-full p-2 border rounded-md shadow-sm" defaultValue={pet.imageUrl} />

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}
