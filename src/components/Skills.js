import react from '../assets/img/react.png';
import typescript from '../assets/img/typescript.png';
import javascript from '../assets/img/javascript.svg';
import redux from '../assets/img/redux.svg';
import sass from '../assets/img/sass.png';
import bootstrap from '../assets/img/boot1.png';
import api from '../assets/img/api.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>The main stack of technologies I work with.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={react} alt="react" />
                  <h5>REACT</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="javascript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="typescript" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={redux} alt="redux" />
                  <h5>REDUX</h5>
                </div>
                <div className="item">
                  <img src={sass} alt="sass" />
                  <h5>SASS</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="sass" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={api} alt="sass" />
                  <h5>Rest API</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="colorSharp" />
    </section>
  );
};
