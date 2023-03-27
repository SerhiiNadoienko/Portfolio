import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from '../assets/img/proj1.png';
import projImg2 from '../assets/img/proj2.png';
import projImg3 from '../assets/img/proj3.png';
import projImg4 from '../assets/img/proj4.png';
import projImg5 from '../assets/img/proj5.png';
import projImg6 from '../assets/img/proj6.png';
import projImg7 from '../assets/img/proj7.png';
import projImg8 from '../assets/img/proj8.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'STUFF store',
      description: 'Stylish clothing store',
      imgUrl: projImg8,
      href: 'https://react-store-srhndk.vercel.app/',
    },
    {
      title: 'IBoard',
      description: 'Acounting of employees and customers',
      imgUrl: projImg1,
      href: 'https://react-dashboard-wheat.vercel.app/',
    },
    {
      title: 'PIZZA TIME',
      description: 'Pizza purchase app',
      imgUrl: projImg2,
      href: 'https://pizza-time-sage.vercel.app/',
    },
    {
      title: 'MarvelApp',
      description: 'An app for Marvel comics fans',
      imgUrl: projImg3,
      href: 'https://marvelapp-alpha.vercel.app/',
    },
  ];

  const projects2 = [
    {
      title: 'RunSmart',
      description: 'landing page for a heart rate monitor store',
      imgUrl: projImg4,
      href: 'https://nimble-faun-23c936.netlify.app/',
    },
    {
      title: 'FoodProject',
      description: 'Balanced nutrition website',
      imgUrl: projImg5,
      href: 'https://foodproject-rust.vercel.app/',
    },
    {
      title: 'Uber Taxi',
      description: 'Website for uber candidates',
      imgUrl: projImg6,
      href: 'https://papaya-pudding-a12db3.netlify.app/',
    },
    {
      title: 'Irvas',
      description: 'Project for my clients from the glazing industry',
      imgUrl: projImg7,
      href: 'https://loquacious-meerkat-d3cef7.netlify.app/',
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Projects</h2>
                  <p>Welcome to my projects, enjoy😊</p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first" style={{ cursor: 'pointer' }}>
                          Tab 1
                        </Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second" style={{ cursor: 'pointer' }}>
                          Tab 2
                        </Nav.Link>
                      </Nav.Item> */}
                      <Nav.Item>
                        <Nav.Link eventKey="third" style={{ cursor: 'pointer' }}>
                          Tab 2
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <p>My last Projects on React</p>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <p>Classic projects using JavaScript</p>
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
            <p style={{ margin: '60px auto 60px auto', textAlign: 'center' }}>
              My passion for development goes beyond just the technical aspects of the job. I am
              focused on creating user-friendly interfaces and ensuring that clients and users are
              always satisfied with the end product. My career aspirations are centered around
              professional growth, and I am determined to become a leader in my field.
            </p>
          </div>
        )}
      </TrackVisibility>
      {/* <p>
        My passion for development goes beyond just the technical aspects of the job. I am focused
        on creating user-friendly interfaces and ensuring that clients and users are always
        satisfied with the end product. My career aspirations are centered around professional
        growth, and I am determined to become a leader in my field.
      </p> */}

      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
