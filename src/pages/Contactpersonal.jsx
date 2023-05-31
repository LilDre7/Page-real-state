const contactpersonal = () => {
  return (
    <section
      id="personalInfo"
      className="bg-gray-100 pb-14 rounded-lg border-b-4 border-black m-2 border-t-4"
    >
      <div>
        <p className="text-gray-600 text-center p-2 md:flex md:text-lg md:text-center md:justify-end md:-translate-x-5 font-semibold ">
          A home full of charm and happiness awaits you.
        </p>
      </div>

      <section className="text-gray-600">
        <h2 className="border-b-4 border-b-neutral-800 pt-3 max-w-[300px] mx-auto text-2xl md:max-w-[800px] md:text-3xl md:p-2">
          Contact Us
        </h2>
        <div className="p-2 m-2 flex items-center border border-gray-300 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <ul className="list-none flex flex-col gap-3 p-1">
            <li className="flex items-center">
              <i className="bx bx-child"></i>
              <a href="mailto:222flor30@gmail.com" className="ml-2">
                Flor Jarquin
              </a>
            </li>
            <li className="flex items-center">
              <i className="bx bxl-gmail"></i>
              <a href="mailto:222flor30@gmail.com" className="ml-2">
                Gmail: 222flor30@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <i className="bx bxs-phone"></i>
              <a href="tel:+50662224406" className="ml-2">
                Cellphone: +506 62224406
              </a>
            </li>
          </ul>
        </div>

        <div className="p-2 m-2 mt-4 border border-gray-300 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <ul className="list-none">
            <li className="flex items-center">
              <i className="bx bx-child"></i>
              <a href="mailto:correo@example.com" className="ml-2">
                Greg Jacobs
              </a>
            </li>
            <li className="flex items-center pt-2">
              <i className="bx bxs-phone"></i>
              <a href="tel:+13106784871" className="ml-2">
                Cellphone: +1 (310) 678-4871
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default contactpersonal;
