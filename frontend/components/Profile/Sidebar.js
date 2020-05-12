import { ListGroup, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";

const dashboard = ({ children }) => {
  return (
    <div className="d-flex" id="wrapper">
      <div className="border-right col-2" id="sidebar-wrapper">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky pt-0 pl-3 pr-3">
            <div className="sidebar-heading">
              <img
                src="/static/images/logo-navbar-white.png"
                className="rounded d-block mx-auto"
                width="130"
                height="35"
                alt="automatch"
              />
            </div>
            <ListGroup variant="flush">
              <Link href="/" as="/">
                <ListGroup.Item action className="sidebar-item">
                  <i className="fas fa-arrow-left mr-2"></i> Home
                </ListGroup.Item>
              </Link>
              <Link href="/profile/dashboard" as="/profile/dashboard">
                <ListGroup.Item action className="sidebar-item">
                  <i className="fal fa-chart-pie-alt mr-2"></i> Dashboard
                </ListGroup.Item>
              </Link>
              <Link href="/profile/[user]" as={`/profile/[user]`}>
                <ListGroup.Item action className="sidebar-item">
                  <i className="fal fa-user mr-2"></i> User Profile
                </ListGroup.Item>
              </Link>
            </ListGroup>
          </div>
        </nav>
      </div>

      <div id="page-content-wrapper" className="main-dashboard">
        <Navbar
          expand="lg"
          className="border-bottom bg-white navbar-profile mb-3"
        >
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Username" alignRight>
                <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {children}

        <footer className="footer bg-white">
          <div className="container-fluid nav-right text-center pt-3 pb-3 border-top">
            <span className="text-muted">Designed by </span>
            <a href="#!" className="text-dec-none text-info">
              Automatch.
            </a>
          </div>
        </footer>
      </div>

      <style jsx>{`
        :global(button:focus) {
          outline: 1px solid transparent;
        }
        :global(.list-group-item-action:focus) {
          color: white;
        }
        #sidebar-wrapper {
          min-height: 100vh;
          margin-left: -15rem;
          background-color: #021927 !important;
        }

        #sidebar-wrapper .sidebar-heading {
          padding: 1.1rem 1.25rem;
          font-size: 1.2rem;
          border-bottom: 1px solid #ccc;
          margin-bottom: 10px;
        }

        #sidebar-wrapper .list-group {
          width: 15rem;
        }

        #page-content-wrapper {
          min-width: 100vw;
        }

        #wrapper.toggled #sidebar-wrapper {
          margin-left: 0;
        }

        :global(.sidebar-item) {
          background-color: transparent !important;
          color: #fff;
        }

        :global(.sidebar-item:hover) {
          background-color: #005b92 !important;
          color: #fff;
        }

        :global(.main-dashboard) {
          background-color: rgb(247, 247, 248);
        }

        :global(.navbar-profile) {
          padding: 1rem 1rem;
        }

        .sidebar {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          z-index: 100; /* Behind the navbar */
          padding: 0; /* Height of navbar */
          box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
          background-color: #021927 !important;
        }

        .sidebar-sticky {
          position: relative;
          top: 0;
          height: calc(100vh - 48px);
          padding-top: 0.5rem;
          overflow-x: hidden;
          overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
        }

        @media (min-width: 768px) {
          #sidebar-wrapper {
            margin-left: 0;
          }

          #page-content-wrapper {
            min-width: 0;
            width: 100%;
          }

          #wrapper.toggled #sidebar-wrapper {
            margin-left: -15rem;
          }
        }
      `}</style>
    </div>
  );
};

export default dashboard;