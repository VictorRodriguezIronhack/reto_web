import AuthServices from '../services/auth.service'
import PhoneServices from '../services/phones.service'
import { Button, Card, Row, Col } from 'react-bootstrap'

const WishList = ({ setUser, loggedUser, setUserUpdate }) => {

    const authServices = new AuthServices()
    const phoneServices = new PhoneServices()
    const logOut = async () => {

        try {
            const logoutMessage = await authServices.logout()
            console.log(logoutMessage.data.message)
            setUser(undefined)

        } catch (error) {
            console.log(error.response.data)
        }

    }

    const removePhone = async (userId, phoneId) => {
        try {
            await phoneServices.removePhone(userId, phoneId)
            setUserUpdate(true)
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return (
        <>
            <h2 style={{ textAlign: 'center', margin: '2rem 0' }}>Wish List</h2>
            <Button variant='warning' onClick={logOut} style={{ display: 'block', margin: '2rem auto' }}>Log out</Button>
            <Row>
                <Col>
                    {loggedUser.wishlist.length > 0 ?
                        loggedUser.wishlist.map((phone, idx) => (
                            <Card key={idx} style={{ textAlign: 'center' }}>
                                <Row>
                                    <Col md={6} style={{ paddingTop: '0.5rem' }}>
                                        <Card.Img variant="top" style={{ objectFit: 'cover', width: '80px' }} src={phone.imageFileName} />
                                    </Col>
                                    <Col md={6}>
                                        <Card.Body>
                                            <Card.Title>{phone.name} - €{phone.price}</Card.Title>
                                            <Button variant="danger" size='sm' onClick={() => removePhone(loggedUser._id, phone.id)} >Remove</Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        ))
                        :
                        <h3 style={{ textAlign: 'center' }}>Empty Cart!</h3>
                    }

                </Col>

            </Row>
        </>
    );
}

export default WishList;