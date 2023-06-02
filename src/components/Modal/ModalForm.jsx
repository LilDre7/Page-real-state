import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ModalForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_93g3crl",
        "template_5khfa66",
        form.current,
        "EQnk4jDWH6qVeKX9w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="text-black">
      <div>
        <Button variant="primary" onClick={handleShowModal}>
          <i className="bx bx-info-circle text-xl text-slate-950 md:text-2xl "></i>
        </Button>

        <Modal show={showModal} onHide={handleCloseModal} className="">
          <Modal.Header closeButton>
            <section className="flex items-center justify-between ">
              <Modal.Title>Contact me</Modal.Title>
              <Button
                className="text-black absolute right-0 -translate-x-7"
                variant="secondary"
                onClick={handleCloseModal}
              >
                Close
              </Button>
            </section>
          </Modal.Header>

          <Modal.Body className="">
            <div className="h-4/5 flex items-center justify-center">
              <div className="w-full sm:max-w-md bg-white rounded-lg shadow-lg px-8 py-6">
                <form ref={form} onSubmit={sendEmail}>
                  <label className="block mb-4 text-lg font-bold text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full px-4 py-2 mb-6 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />

                  <label className="block mb-4 text-lg font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full px-4 py-2 mb-6 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  />

                  <label className="block mb-4 text-lg font-bold text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="w-full h-32 px-4 py-2 mb-6 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  ></textarea>

                  <input
                    type="submit"
                    value="Send"
                    className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  />
                </form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
};

export default ModalForm;
