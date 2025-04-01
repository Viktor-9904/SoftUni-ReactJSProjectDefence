import { useEffect, useState } from 'react'
import { FaceSmileIcon, StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { Link, useNavigate, useParams } from "react-router";
import petService from '../../services/petService';
import EditPet from '../editPet/EditPet';
import DeletePet from '../deletePet/DeletePet';

export default function PetDetails() {


    const [isUpdated, setIsUpdated] = useState(false)
    const [isEditModalVisible, setEditModal] = useState(false)
    const [isDeleteModalVisible, setDeleteModal] = useState(false)
    const [currentPet, setPet] = useState({})
    const { petId } = useParams()

    useEffect(() => {
        petService.getPetById(petId)
            .then(setPet)
    }, [petId])


    const openEditModalClickHandler = () => {
        setEditModal(true)
    }
    const closeEditModalClickHandler = () => {
        setEditModal(false)
    }
    const submitEditModalClickHandler = () => {
        petService.getPetById(petId)
            .then(setPet)
    }
    const openDeleteModalClickHandler = () => {
        setDeleteModal(true)
    }
    const closeDeleteModalClickHandler = () => {
        setDeleteModal(false)
    }

    return (
        <div className="min-h-screen pt-30">

            {isEditModalVisible && (
                <EditPet
                    onClose={closeEditModalClickHandler}
                    onSubmit={submitEditModalClickHandler}
                />)}

            {isDeleteModalVisible && (
                <DeletePet
                    onClose={closeDeleteModalClickHandler}
                    name={currentPet.name}
                />)}

            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-6">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center">
                    <div className="lg:flex lg:justify-center">
                        <img
                            alt="Pet Image"
                            src={currentPet.imageUrl}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="mt-6 lg:mt-0 lg:col-span-1">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{currentPet.name}</h1>
                        <hr />
                        <p className="mt-1 text-sm text-gray-500"><strong>Species: </strong>{currentPet.species}</p>
                        <p className="mt-1 text-sm text-gray-500"><strong>Breed: </strong>{currentPet.breed}</p>
                        <p className="mt-1 text-sm text-gray-500"><strong>Age: </strong>{currentPet.age} {currentPet.age === 1 ? "year" : "years"} old</p>
                        <p className="mt-1 text-sm text-gray-500"><strong>Gender: </strong>{currentPet.gender}</p>

                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-900">Description</h3>
                            <p className="text-base text-gray-900 mt-4">{currentPet.description}</p>
                        </div>
                        <form className="mt-10">
                            <div className="mt-10 flex space-x-3 justify-center">
                                <button
                                    type="submit"
                                    className="w-full max-w-[200px] flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-6 py-3 text-base font-medium text-white hover:bg-orange-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                                >
                                    Request Adoption
                                </button>

                                <button
                                    type="button"
                                    className="w-full max-w-[200px] flex items-center justify-center rounded-md border border-transparent bg-green-500 px-6 py-3 text-base font-medium text-white hover:bg-green-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                                    onClick={openEditModalClickHandler}
                                >
                                    Edit
                                </button>

                                <button
                                    type="button"
                                    className="w-full max-w-[200px] flex items-center justify-center rounded-md border border-transparent bg-red-500 px-6 py-3 text-base font-medium text-white hover:bg-red-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                                    onClick={openDeleteModalClickHandler}
                                >
                                    Delete
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}
