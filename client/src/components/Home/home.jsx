import { useEffect, useState } from "react";
import petService from "../../services/petService";
import NewestPet from "./newestAdditions/NewestPet";

export default function Home() {
    
    const [newestPets, setPets] = useState([])

    useEffect(() => {
        petService.getAll()
            .then(pets => {
                const sortedPets = pets.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn))
                const top3NewestPets = sortedPets.slice(0, 3)

                setPets(top3NewestPets)
            })
            .catch(error => {
                console.error('Error fetching pets:', error);
            });
    }, [])


    return (
        <div className="min-h-screen flex flex-col">
            <div className="relative isolate px-6 pt-14 lg:px-8 flex-grow">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
                    <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                        Find Your New Best Friend Today!
                    </h1>
                    <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
                        Ready to adopt? Explore our lovely pets looking for a forever home. Make a difference today.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
                {newestPets.length > 0
                ? <h2 className="text-4xl font-semibold text-center text-gray-900">Our Newest Additions</h2>
                : <h2 className="text-4xl font-semibold text-center text-gray-900">We don't have any pets for adoption at the moment.</h2>
                }

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newestPets.length > 0 &&
                        newestPets.map(pet => <NewestPet
                        key={pet._id}
                        id={pet._id}
                        name={pet.name}
                        imageUrl={pet.imageUrl}
                        breed={pet.breed}
                        age={pet.age} 
                        />)
                    }
                </div>
            </div>
        </div>
    )
}
