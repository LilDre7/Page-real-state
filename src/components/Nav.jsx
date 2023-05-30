// *** Este va hacer nuestro menu de navegacion para esta aplicacion *** //

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fixed bottom-0 w-full h-14 bg-black bg-opacity-50 backdrop-blur z-50 md:top-0">
      <section className="flex justify-around items-center h-full">
        <a
          href=""
          className="flex flex-col items-center text-gray-100 hover:text-white transition-colors duration-300 hover:scale-110"
        >
          <i className="bx bx-user animate-pulse text-lg md:text-2xl"></i>
          <span className="text-xs">Yo</span>
        </a>
        <Link
          to="/"
          className="flex flex-col items-center text-gray-100 hover:text-white transition-colors duration-300 hover:scale-110"
        >
          <i className="bx bx-home animate-pulse text-lg md:text-2xl"></i>
          <span className="text-xs">Hogar</span>
        </Link>
        <a
          href="mailto:222flor30@gmail.com"
          className="flex flex-col items-center text-gray-100 hover:text-white transition-colors duration-300 hover:scale-110"
        >
          <i className="bx bxl-gmail animate-pulse text-lg md:text-2xl"></i>
          <span className="text-xs">Correo</span>
        </a>
        <a
          href="tel:+50662224406"
          className="flex flex-col items-center text-gray-100 hover:text-white transition-colors duration-300 hover:scale-110"
        >
          <i className="bx bx-phone animate-pulse text-lg md:text-2xl"></i>
          <span className="text-xs">Celular</span>
        </a>
      </section>
    </nav>
  );
};

export default Nav;
