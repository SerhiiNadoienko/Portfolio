import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ['REACT Developer', 'Web Developer', 'JavaScript Developer'];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Serhii`}{' '}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "REACT Developer", "Web Developer", "JavaScript Developer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
<<<<<<< HEAD
                    Hello friends! Let me introduce myself 😊 <br />
                    As a frontend developer with 1.9 years of experience, I am passionate about
                    creating beautiful and functional web applications. I have a deep understanding
                    of the React.js ecosystem and am dedicated to staying up-to-date on the latest
                    advancements in the field.
=======
                    I am a Frontend Developer with 1.9 years experience and good understanding of the React.js ecosystem.My responsibilities include creating React components, getting data from the server, creating global application logic using Redux and much more. IT is my passion and I am happy to do this even in my free time☺
>>>>>>> 64f774c46592e2a76c6b8d4f90aba4d4305d487c
                  </p>
                  <h5 onClick={() => console.log('connect')}>Let’s Connect</h5>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/*   <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'headerImg animate__zoomIn' : ''}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
