import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import "@fontsource-variable/karla";
import ModalForm from "./Modal/ModalForm";
import ModalInfo from "./Modal/ModalInfo";
import Modalubi from "./Modal/Modalubi";
import GridImage from "./GridImage";
import { Link } from "react-router-dom";
import Header from "./Header";
import CartInfo from "./CartInfo";
import Contactpersonal from "../pages/Contactpersonal";
import Footer from "../pages/Footer";

const FirstPage = () => {
  return (
    <main className="bg-white/70 w-full ms:max-w-[1200px] mx-auto pb-4">
      <Header />
    
      <CartInfo  />

      <section className="flex justify-around p-2">
        <ModalForm />
        <ModalInfo />
        <Modalubi />
      </section>

      <section className="text-gray-600 p-2 ">
        <h3 className="text-xl font-bold pb-2">Details: </h3>
        <GridImage />
      </section>

      <section className="flex flex-col justify-around p-2 ms:grid ms:grid-cols-2 ">
        <Link to="/PageImages" className="text-orange-500 font-semibold">
          <div className="flex justify-around p-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center flex items-center gap-2">
              <i className="bx bx-images text-xl"></i>
              All images house
            </button>
          </div>
        </Link>

        <Link to="/contact" className="text-orange-500 font-semibold">
          <div className="flex justify-around p-3">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full text-center flex items-center gap-2">
              <i className="bx bx-street-view text-xl"></i>
              Contact me
            </button>
          </div>
        </Link>
      </section>

      <section className="flex justify-around p-2 md:text-lg ">
        <Table className="w-full bg-white border border-gray-200">
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b">State:</td>
              <td className="px-4 py-2 border-b">For SALE</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Property type: </td>
              <td className="px-4 py-2 border-b">Condominiun</td>
            </tr>
          </tbody>
        </Table>
      </section>

      <div></div>

      <section className="text-black/70 p-2">
        <p className="text-lg font-bold pb-2 p-2">
          Charming 1 bed, 2 bath condo located in the Las Palmas urbanization A
          short distance from the center and a few minutes walk from the beach
          Furnished 3 air conditioning units, Hot water Located in a small and
          quiet complex of 12 units that surround the pool Secured Free parking
          space available Low HOA fees of $165/mo approx Great income from short
          term and Airbnb rentals or long term
        </p>
      </section>

      <section className="flex flex-col p-2">
        <h2 className="text-xl font-bold pb-2">Property information:</h2>

        <Table className="w-full bg-white border border-gray-200 md:text-lg ">
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b">State:</td>
              <td className="px-4 py-2 border-b">For sale</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Contruction size:</td>
              <td className="px-4 py-2 border-b">715 sq.ft.</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Status:</td>
              <td className="px-4 py-2 border-b">Available</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Bedrooms: </td>
              <td className="px-4 py-2 border-b">1</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Bathrooms: </td>
              <td className="px-4 py-2 border-b">2</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b">Style: </td>
              <td className="px-4 py-2 border-b">Loft</td>
            </tr>
          </tbody>
        </Table>
      </section>

      <div>
        <Contactpersonal />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
};

export default FirstPage;
