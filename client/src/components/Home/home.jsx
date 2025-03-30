export default function Home() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
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

            {/* New Section to showcase pets */}
            <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8">
                <h2 className="text-4xl font-semibold text-center text-gray-900">Out Newest Additions</h2>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <img
                            src="https://placedog.net/400/300"
                            alt="Adoptable Dog 1"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Buddy</h3>
                        <p className="text-gray-500">Labrador Retriever, 2 years old</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <img
                            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
                            alt="Adoptable Cat 1"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Whiskers</h3>
                        <p className="text-gray-500">Domestic Shorthair, 3 years old</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-lg">
                        <img
                            src="https://placedog.net/400/300?random=2"
                            alt="Adoptable Dog 2"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                        <h3 className="mt-4 text-xl font-semibold text-gray-900">Bella</h3>
                        <p className="text-gray-500">German Shepherd, 1.5 years old</p>
                    </div>
                </div>
            </div>
        </div>
    )
}