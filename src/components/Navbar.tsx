export default function Navbar() {
  return (
    <nav
      className="w-full shadow-md py-4 px-6 fixed top-0 left-0 z-50"
      style={{ backgroundColor: "var(--bg-navbar)", fontFamily: "var(--font-urbanist)", fontSize: "18px", fontWeight: 500 }}
    >
      <div className="container mx-auto flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">Pixro</h1>

        {/* Centered Navigation List */}
        <ul className="flex space-x-6 mx-auto">
          <li>
            <a href="#AItools" className="hover:text-gray-400 flex items-center">
              AI Tools <span className="ml-2 text-xs">&#9660;</span> {/* Down arrow */}
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-gray-400 flex items-center">
              Solutions <span className="ml-2 text-xs">&#9660;</span> {/* Down arrow */}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 flex items-center">
              Resources <span className="ml-2 text-xs">&#9660;</span> {/* Down arrow */}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 flex items-center">
              Pricing <span className="ml-2 text-xs">&#9660;</span> {/* Down arrow */}
            </a>
          </li>
        </ul>

        {/* Right-aligned Buttons */}
        <div className="flex space-x-4">
          <a
            href="#login"
            className="bg-[#454545] text-white px-4 py-2 rounded-lg hover:bg-[#333333]"
          >
            Login
          </a>
          <a
            href="#getstarted"
            className="text-white px-4 py-2 rounded-lg hover:bg-[#00e764] transition-all"
            style={{
              backgroundImage: "linear-gradient(to bottom, #00FF75, #00bd5e)", color: "#000000"
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
