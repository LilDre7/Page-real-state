function CartInfo() {
  return (
    <section className="flex justify-center items-center p-3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-200 hover:bg-blue-300 transition-colors duration-300 ease-in-out md:grid md:grid-cols-3 md:w-full md:max-w-full">
        <img
          className="w-full"
          src="/images/Playa-del-Coco1.jpg"
          alt="Playa del Coco"
        />
        <div className="md:px-6 md:py-3 p-2 ">
          <div className="font-bold text-lg mb-2 text-black md:text-2xl ">
            Sea Bird #12
          </div>
          <p className="text-gray-700 text-base md:text-xl ">
            Playas del Coco, Guanascaste
          </p>
        </div>
        <ul className="list-none p-0">
          <li className="bg-blue-300 hover:bg-blue-400 transition-colors duration-300 ease-in-out p-2 border-b-2 text-orange-700 font-bold md:text-xl text-lg">
            $175,000 USD
          </li>
          <li className="bg-blue-300 hover:bg-blue-400 transition-colors duration-300 ease-in-out p-2 border-b-2 mdtext-xl text-lg ">
            Just reduced:
            <span className="text-orange-300 font-bold "> $175,000 USD</span>
          </li>
          <li className="bg-blue-300 hover:bg-blue-400 transition-colors duration-300 ease-in-out p-2 border-b-2 md:text-xl text-lg ">
            Residential urbanization
          </li>
        </ul>
      </div>
    </section>
  );
}

export default CartInfo;
