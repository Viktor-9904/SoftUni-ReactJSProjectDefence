import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import { Link, useNavigate, useParams } from "react-router";
import petService from '../../services/petService';

const currentPet = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

export default function PetDetails() {

    const [currentPet, setPet] = useState({})
    const { petId } = useParams()

    useEffect(() => {
        petService.getPetById(petId)
            .then(setPet)
    }, [petId])

    console.log(petId + " petId")
    console.log(currentPet)

    return (
        <div className="min-h-screen pt-30">
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
                        <hr/>
                        <p className="mt-1 text-sm text-gray-500"><strong>Species: </strong>{currentPet.species}</p>
                        <p className="mt-1 text-sm text-gray-500"><strong>Breed: </strong>{currentPet.breed}</p>
                        <p className="mt-1 text-sm text-gray-500"><strong>Age: </strong>{currentPet.age} {currentPet.age === 1 ? "year" : "years"} old</p>
                        <p className="mt-1 text-sm text-gray-500"><strong>Gender: </strong>{currentPet.gender}</p>

                        <div className="mt-6">
                            <h3 className="text-xl font-semibold text-gray-900">Description</h3>
                            <p className="text-base text-gray-900 mt-4">{currentPet.description}</p>
                        </div>
                        <form className="mt-10">
                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                            >
                                Request {currentPet.name} For Adoption
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
