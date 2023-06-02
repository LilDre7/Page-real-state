import "./footer.css";
function Footer() {
  return (
    <footer className="footer md:mb-[-10rem]">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.facebook.com/FlorRealEstate?mibextid=ZbWKwL">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://github.com/LilDre7">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="https://www.linkedin.com/in/alvaro-aburto-dev/">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li className="social-icon__item">
          <a className="social-icon__link" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link" href="#">
            Home
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#houseinfo" >
            About
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="#personalInfo">
            Services
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
      <p className="text-center p-2">
        <span className="text-xl font-semibold text-black/75">
          &copy;2023 Lil Dree | All Rights Reserved
        </span>
      </p>
    </footer>
  );
}

export default Footer;
