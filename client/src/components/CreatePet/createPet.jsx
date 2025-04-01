import { useNavigate } from "react-router";
import petService from "../../services/petService";

export default function CreatePet() {
    const navigate = useNavigate()

    const submitAction = async (formData, e) => {
        const petData = Object.fromEntries(formData);

        const result = await petService.createPet(petData)
        navigate('/pets')
    };

    return (
        <div className="min-h-screen flex flex-col">
            <div className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-4xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
                    Put a Pet Up for Adoption
                </h2>
                
                <form action={submitAction} className="mt-6 w-full max-w-lg mx-auto grid grid-cols-1 gap-6">
                    <input 
                        type="text" name="name" placeholder="Pet Name" 
                        className="w-full p-3 border rounded-md shadow-sm"
                    />

                    <select 
                        name="species" 
                        className="w-full p-3 border rounded-md shadow-sm" 
                    >
                        <option value="">Select Species</option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Other">Other</option>
                    </select>

                    <input 
                        type="text" name="breed" placeholder="Breed" 
                        className="w-full p-3 border rounded-md shadow-sm"
                    />

                    <input 
                        type="number" name="age" placeholder="Age (years)" 
                        className="w-full p-3 border rounded-md shadow-sm"
                    />

                    <select 
                        name="gender" 
                        className="w-full p-3 border rounded-md shadow-sm" 
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <textarea 
                        name="description" placeholder="Describe the pet..." 
                        className="w-full p-3 border rounded-md shadow-sm resize-none"
                        rows="4"
                    ></textarea>

                    <input 
                        type="text" name="imageUrl" placeholder="Photo URL" 
                        className="w-full p-3 border rounded-md shadow-sm"
                    />

                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition shadow-md"
                    >
                        Submit Pet for Adoption
                    </button>
                </form>
            </div>
        </div>
    );
}
