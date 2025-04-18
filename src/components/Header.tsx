
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-black px-6 py-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/a5cfbf12-f8c9-40eb-b885-ce297ecee85d.png" 
            alt="bsqux logo" 
            className="h-12"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Service", path: "/service" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
