import NavSecond from "./NavSecond";

const Header = () => {
  return (
    <section
      className="h-screen w-full bg-gradient-to-t
    to-white from-black"
    >
      <NavSecond />

      <div className="flex flex-col items-center translate-y-16 ms:text-white ms:text-6xl ">
        <h1 className="text-4xl font-bold ms:text-6xl">Hi i′m Flor Jarquin</h1>
        <p className="text-2xl text-center text-black m-3 sm:max-w-[700px] sm:text-3xl">
          &ldquo;A real estate expert, she guides her clients to successful
          investments with knowledge and confidence.&rdquo;
        </p>
      </div>

      <div className="translate-y-10 sm:translate-y-20 ">
        <img
          id="moving-image"
          className="w-[100px] absolute right-[1px] sm:right-32 ms:w-[150px] "
          src="/images/book.png"
          alt=""
        />
      </div>

      <div className="ms:pt-5">
        <img
          className="absolute bottom-0 right-1/2 md:translate-y-14 transform translate-x-1/2 ms:w-[330px]"
          src="/images/flor.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Header;
