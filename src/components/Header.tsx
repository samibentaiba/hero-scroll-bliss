
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-black px-6 py-4">
      <div className="mx-auto max-w-[1920px] flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/images/WhiteItc.svg" 
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
