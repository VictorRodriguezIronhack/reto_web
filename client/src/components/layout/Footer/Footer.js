import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter color="blue-grey" className="font-small pt-4 mt-4">
            <MDBContainer className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Catalog App by Héctor Carramiñana</h5>
                        <p>Here you can see different phones and their details and compare it :)</p>
                    </MDBCol>
                    <MDBCol md="6">
                        <ul>
                            <li className="list-unstyled">
                                <a href="https://www.linkedin.com/in/hector-carraminana/">LinkedIn</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="https://profiles.ironhack.com/HectorCarraminana">IronHack profile</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="https://github.com/Phector27">Github</a>
                            </li>

                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.linkedin.com/in/hector-carraminana/"> Héctor Carramiñana Ramos </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;