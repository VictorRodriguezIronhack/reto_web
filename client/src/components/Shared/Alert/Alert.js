import { Toast } from "react-bootstrap"

const Alert = ({handleAlert, show, title = 'Message', text}) => {

    return (
        <Toast autohide show={show} onClose={() => handleAlert(false)} delay={3000} style={{zIndex: 9999, position: 'fixed', bottom: 38, right: 17, width: 400, color: 'white', backgroundColor: '#343a40'}}>
            <Toast.Header>
                <img
                    src="https://res.cloudinary.com/abel-av/image/upload/v1616373546/reto_web/smartphone_cartoon_cjxsaq.jpg"
                    className="rounded mr-2"
                    alt="Cartoon Smartphone"
                    style={{ width: 20, height: 20 }}
                />
                <strong className="mr-auto">{title}</strong>
            </Toast.Header>
            <Toast.Body>{text}</Toast.Body>
        </Toast>
    )
}


export default Alert