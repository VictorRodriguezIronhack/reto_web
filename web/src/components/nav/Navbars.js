import { AuthContext } from '../../contexts/AuthStore';
import { CartContext } from '../../contexts/CartStore';
import { Link, useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import service from '../../services/users-service';


// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  NavLink,
  UncontrolledTooltip
} from "reactstrap";


const Navbars = () => {

  const { user, isAuthenticated, onUserChange } = useContext(AuthContext);
  const { cart, onCartChange } = useContext(CartContext);
  const history = useHistory()
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
    onCartChange([])
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
                src="/the-phone-cave.png"
                style={{ width: "5rem", height: "4rem" }}
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
                        src="/the-phone-cave.png"
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
                  <NavLink href={`/profile/${user.id}`}>
                    <img src={user.avatar} alt={user.name} className="img-fluid rounded-circle shadow mr-3" style={{ width: "35px" }} />
                    <span className="nav-link-inner--text">{user?.email}</span>
                  </NavLink>

                  <NavLink href="/cart">
                    <div className="d-flex align-items-center">
                    <i className="ni ni-cart"></i>
                      {cart.length !== 0 &&
                        <p className="bg-danger text-white text-center rounded-circle my-auto" style={{width: "25px"}}>{cart?.length}</p>
                      }
                    </div>

                  </NavLink>

                  <NavLink href="#" id="logout495507257" onClick={handleLogout} >
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="logout495507257">
                    Log Out
                </UncontrolledTooltip>
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
