import { AuthContext } from '../../contexts/AuthStore';
import { Link, useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import service from '../../services/users-service';


// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  NavLink
} from "reactstrap";


const Navbars = () => {

  const { user, isAuthenticated, onUserChange } = useContext(AuthContext);
  const history = useHistory();

  const [state, setState] = useState({
    collapseClasses: "",
    collapseOpen: false
  })

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, [])


  async function handleLogout() {
    await service.logout();
    onUserChange(undefined);
    history.push("/login");
  }

  const onExiting = () => {
    setState({
      collapseClasses: "collapsing-out"
    });
  };

  const onExited = () => {
    setState({
      collapseClasses: ""
    });
  };

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <img
                alt="..."
                src="../../assets/img/brand/argon-react-white.png"
              />
            </NavbarBrand>
            <button className="navbar-toggler" id="navbar_global">
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={state.collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <img
                        alt="..."
                        src="../../assets/img/brand/argon-react.png"
                      />
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button className="navbar-toggler" id="navbar_global">
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>

              {isAuthenticated() &&
                <Nav className="navbar-nav-hover align-items-lg-center ml-lg-auto" navbar>
                  <NavLink href="/telefonos">Products</NavLink>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">{user?.email}</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/profile" tag={Link}>
                        Profile
                        </DropdownItem>
                      <DropdownItem onClick={handleLogout} >
                        Log out
                        </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              }
              {!isAuthenticated() &&
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink href="/login">
                        Sign In   
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/register" >
                        Sign Up
                    </NavLink>
                  </NavItem>
                </Nav>
              }
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Navbars;
