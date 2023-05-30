import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Map from "/src/components/map/Map";

const ModalForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <div>
      <div>
        <Button variant="primary" onClick={handleShowModal}>
          <i className="bx bx-current-location text-xl text-slate-950 md:text-2xl "></i>
        </Button>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Map of the house</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <section>
              <Map />
            </section>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="text-slate-950"
              variant="secondary"
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ModalForm;
