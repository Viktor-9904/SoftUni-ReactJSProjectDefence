import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogPanel } from '@headlessui/react'
import { useContext, useState } from 'react'
import { Link } from 'react-router'
import { UserContext } from "../../context/UserContext";



const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Meet Our Pets', href: '/pets' },
    { name: 'Put Up Pet For Adoption', href: 'put-up-for-adoption' },
    { name: 'Contact Us', href: '#' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { email } = useContext(UserContext)


    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="relative flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-none">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Pet Adoption Center</span>
                        <img
                            alt="Pet Adoption"
                            src='/public/images/HappyTailsLogo.png'
                            className="border-4 border-yellow-400 rounded-lg shadow-[0_0_10px_#facc15] h-20 w-auto"
                        />
                    </Link>
                </div>

                <div className="hidden lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.href} className="text-sm font-semibold text-gray-900">
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex lg:flex-none lg:gap-x-6">
                    {!email?.length > 0
                        ? <><Link to="/register" className="text-sm font-semibold text-gray-900">
                            Register <span aria-hidden="true">&rarr;</span>
                        </Link>

                            <Link to="/login" className="text-sm font-semibold text-gray-900">
                                Login <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </>
                        : <Link to="/logout" className="text-sm font-semibold text-gray-900">
                            Logout <span aria-hidden="true">&rarr;</span>
                        </Link>
                    }
                </div>
            </nav>


            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Pet Adoption Center</span>
                            <img
                                alt="Pet Adoption"
                                src='/public/images/HappyTailsLogo.png'
                                className="h-20 w-auto rounded-lg"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    to="#adopt"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Adopt Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}