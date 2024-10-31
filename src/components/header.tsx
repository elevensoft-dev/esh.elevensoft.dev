import { Eye } from "lucide-react";

function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Eye className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">ESH</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">
              Contact
            </a>
            <a href="#blog" className="text-gray-600 hover:text-indigo-600">
              Blog
            </a>
          </nav>
          <div>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
