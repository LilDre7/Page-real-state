const Header = () => {
  return (
    <section className="text-center w-full">
      <div className="flex justify-center items-center pt-3 ms:mt-14">
        <div className="mr-10">
          <img
            className="w-[100px] h-[80px] transition-opacity duration-300 transform hover:translate-y-1 bg-contain translate-y-4 ms:w-[130px] ms:h-[100px]"
            src="/public/images/Mi proyecto.png"
            alt=""
          />
        </div>
        <div className="text-right">
          <h1 className="text-3xl font-bold pt-4 transition-opacity duration-300 transform hover:translate-y-1 ms:text-5xl">
            Flor Jarquin
          </h1>
          <h6 className="text-xs font-light text-orange-300 pt-2 transition-opacity duration-300">
            FlorJarquin.com
          </h6>
        </div>
      </div>

      <svg
        className="bottom-0 w-full -translate-y-5 transition-opacity duration-300 md:rounded-xl transform hover:translate-y-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="url(#gradient)" // Reemplaza "gradient" por el nombre del gradiente que elijas
          d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,192C672,192,768,224,864,208C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#FF0080" />
            <stop offset="100%" stopColor="#FF8C00" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Header;
