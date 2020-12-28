import "./footer.scss";
import { ReactComponent as Logo } from "../../svgs/logo.svg";

const Footer = () => {
  return (
    <footer>
      <Logo className="logo" />
      <div className="footer__container">
        <div className="footer__container-social">
          <ul>
            <li>
              <a href="https://www.facebook.com/">
                <i
                  className="fa fa-facebook-square social_icons "
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <i
                  className="fa fa-twitter social_icons"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <i
                  className="fa fa-instagram social_icons"
                  aria-hidden="true"
                ></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__container-text"></div>

        <span>LandC@re copyright 2020</span>
        <p>
          This is a mockup, it is just for demonstration purpose. Do not
          reproduce or copy any materials on this website.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
