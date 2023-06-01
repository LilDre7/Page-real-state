import { Container, Navbar } from "react-bootstrap";

const NavSecond = () => {
  return (
    <Navbar className=" md:mt-14 w-full backdrop-blur-sm" variant="dark">
      <Container className="flex justify-content-between items-center">
        <Navbar.Brand
          className="flex items-center justify-content-between"
          href="#home"
        >
          <img
            alt=""
            src="/images/Mi proyecto.png"
            width="70"
            height="70"
            className="d-inline-block align-top"
          />
          <h3
            id="moving-heading"
            className="text-black font-bold sm:text-3xl sm:text-red-700"
          >
            Costa Rica Real State
          </h3>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavSecond;
