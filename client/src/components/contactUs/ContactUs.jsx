export default function ContactUs() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">
                        Contact Us
                    </h1>

                    <div className="bg-orange-200/40 shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            If you have any questions or need assistance, feel free to reach out to us using the contact information below:
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="text-lg text-gray-800 font-semibold w-1/4">Phone:</span>
                                <span className="text-lg text-gray-600">+1 (123) 456-7890</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-lg text-gray-800 font-semibold w-1/4">Email:</span>
                                <span className="text-lg text-gray-600">contact@happyadoptpets.com</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-lg text-gray-800 font-semibold w-1/4">Address:</span>
                                <span className="text-lg text-gray-600">
                                    123 Pet Street, Animal City, PA 12345, USA
                                </span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-lg text-gray-800 font-semibold w-1/4">Working Hours:</span>
                                <span className="text-lg text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</span>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-lg text-gray-600">We look forward to hearing from you!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
