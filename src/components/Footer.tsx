export default function Footer() {
    return (
      <footer className="w-full bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Pixro. All rights reserved.</p>
        </div>
      </footer>
    );
  }