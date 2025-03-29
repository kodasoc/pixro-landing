export default function Navbar() {
    return (
      <nav className="w-full bg-white shadow-md py-4 px-6 fixed top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pixro</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-gray-600">About</a></li>
            <li><a href="#features" className="hover:text-gray-600">Features</a></li>
            <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  