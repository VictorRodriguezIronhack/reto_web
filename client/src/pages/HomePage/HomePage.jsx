import { Container, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import BackGroundIMG from '../../img/PhonesBG.jpg'
import './HomePage.css'

function HomePage() {
    return (
        <Container>
            <div id="HomePageBackGround">
                <img src={BackGroundIMG} alt="HomePageBackGround"></img>
            </div>
            <h1 style={{color: 'grey', textShadow: '2px 2px #000000', fontSize: '80px'}}>Welcome to the phones app</h1>
            <h5 style={{color: 'black'}}>Here you can see all the specs of our catalogue phones.</h5>
            <hr/>
            <Link to="/telefonos">
                <Button variant="dark" size="xl">Let'save a look!</Button>
            </Link>
        </Container>
    )
}

export default HomePage