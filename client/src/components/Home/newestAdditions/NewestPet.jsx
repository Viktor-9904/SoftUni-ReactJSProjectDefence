import { Link } from 'react-router'

export default function NewestPet({
    id,
    imageUrl,
    name,
    breed,
    age,
}) {
    return (
        <Link to={`pets/details/${id}`} className="block hover:opacity-80 transition-all duration-300">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <img
                    src={imageUrl}
                    className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{name}</h3>
                <p className="text-gray-500">{breed}, {age} {age === 1 ? "year" : "years"} old</p>
            </div>
        </Link>
    )
}