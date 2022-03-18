import { Image, Card, Button } from "react-bootstrap"
const PhoneCard = (props) => {


    const showDetails = () => {
        props.openModal()
        props.setPhoneToShow({ ...props })
    }


    return (
        <>
            <Card border="success" style={{ width: '10rem', }}>
                <Image fluid variant="top" src={require(`../images/${props.imageFileName}`)} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>

                    <Button variant="success" onClick={showDetails}>Detalles</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default PhoneCard
