export default function PetItem({
    id,
    name,
    species,
    breed,
    age,
    gender,
    description,
    imageUrl,
}) {
    return (

        <div key={id} className="group relative">
            <img
                alt={`${name} doesn't have any images. `}
                src={imageUrl}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={"#"}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{breed}</p>
                </div>
            </div>
        </div>
    )
}