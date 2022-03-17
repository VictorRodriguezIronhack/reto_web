import { Container, Button } from "react-bootstrap"
import "./PhoneDetails.css"

const PhoneDetails = ({ name, description, imageFileName, manufacturer, price, processor, ram, screen, setNeedsDetails }) => {
    return (
        <>
            <Container className="d-flex position-relative">
                <article className="phone-details-card">

                    <Button variant="dark" className="volver-button"
                        onClick={() => setNeedsDetails(false)}>
                        <span className="arrow">➔</span>Ir atrás
                    </Button>

                    <h2 className=" phone-title">{name}</h2>
                    <div className="card-head flex-row d-flex align-items-center mb-3">
                        <img src={`/PhoneImages/${imageFileName}`} alt={`${name}`}
                            className="phone-image" />
                        <div className="header-text text-start">
                            <p>{description}</p>
                        </div>
                    </div>

                    <p className="spec">Made by {manufacturer}</p>
                    <p className="spec">Price: <span className="price">{price}€</span></p>
                    <p className="spec">Processor "{processor}"</p>
                    <p className="spec">{ram}GB of RAM</p>
                    <p className="spec">Screen specs: {screen}</p>
                </article>
            </Container>
        </>
    )
}
export default PhoneDetails