import { Link } from 'react-router'

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold">Happy Tails Adoption</h2>
              <p className="mt-2 text-sm">Making a difference, one pet at a time.</p>
            </div>
  
            <div className="mt-6 md:mt-0 text-center md:text-right">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/contact-us" className="text-sm hover:text-yellow-400">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
  
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-400">&copy; 2025 Happy Tails Adoption. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  