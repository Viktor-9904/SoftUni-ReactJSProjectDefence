import { useEffect, useState } from "react"
import petService from "../../services/petService"
import PetItem from "./pet-catalog-item/pet-catalog-item"


export default function Pets() {

    const [pets, setPets] = useState([])
    const date = new Date()

    useEffect(() => {
        petService.getAll()
            .then(pets => setPets(pets))
    }, [])

    console.log(pets)

    return (
        <div className="min-h-screen flex flex-col">
            {console.log(date)}
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Pets looking for loving home</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {pets.length > 0
                        ? pets.map(pet => <PetItem key={pet._id} {...pet} />)
                        : <h2>No pets up for adotpion at the moment.</h2>
                    }
                </div>
            </div>
        </div>
    )
}