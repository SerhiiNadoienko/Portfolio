import { Container, Row, Col } from 'react-bootstrap';
import { MailchimpForm } from './MailchimpForm';
import logo from '../assets/img/SRHNDK.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/nav-icon2.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/srh-ndk/">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://github.com/SerhiiNadoienko">
                <img src={navIcon2} alt="github" />
              </a>
              <a href="https://www.facebook.com/sergey.nadoenko/">
                <img src={navIcon3} alt="github" />
              </a>
            </div>
            <p>Serhii Nadoieko Portfolio 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
