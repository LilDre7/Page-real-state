import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

const ModalForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [informacion, setInformacion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    // a tu backend o realizar las acciones necesarias
    // ...

    // Limpia los campos después de enviar el formulario
    setNombre("");
    setApellido("");
    setCiudad("");
    setInformacion("");
  };

  return (
    <section className="text-black">
      <div>
        <Button variant="primary" onClick={handleShowModal}>
          <i className="bx bx-info-circle text-xl text-slate-950 md:text-2xl "></i>
        </Button>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title> Contact me</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="container mx-auto">
              <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="nombre"
                  >
                    Nombre
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ingrese su nombre"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="apellido"
                  >
                    Apellido
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="apellido"
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    placeholder="Ingrese su apellido"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="ciudad"
                  >
                    Ciudad de origen
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="ciudad"
                    type="text"
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                    placeholder="Ingrese su ciudad de origen"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="informacion"
                  >
                    Información
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="informacion"
                    value={informacion}
                    onChange={(e) => setInformacion(e.target.value)}
                    placeholder="Ingrese información adicional"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline animate-bounce"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="text-black"
              variant="secondary"
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

export default ModalForm;
