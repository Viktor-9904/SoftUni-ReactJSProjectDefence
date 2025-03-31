import { Link } from 'react-router'

export default function PetItem({
    _id,
    name,
    species,
    breed,
    age,
    gender,
    description,
    imageUrl,
}) {

    return (

        <div key={_id} className="group relative">
            <img
                alt={`${name} doesn't have any images. `}
                src={imageUrl}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link to={`/pets/details/${_id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{age} {age === 1 ? "year" : "years"} old</p>
                    <p className="mt-1 text-sm text-gray-500">{breed}</p>
                </div>
            </div>
        </div>
    )
}