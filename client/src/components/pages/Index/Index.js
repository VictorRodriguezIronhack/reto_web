import { Button } from 'react-bootstrap'
import './Index.css'


const IndexPage = () => {

    return (
        <>
            <div className="embed-responsive embed-responsive-16by9 row justify-content-center navMargin">
                <video height='auto' width='100%' style={{ right: '0', bottom: '0', minWidth: '100%', minHeight: '100%', zIndex: '-1' }}
                    autoPlay loop src="https://res.cloudinary.com/demo/video/upload/c_pad,h_360,w_640/r_50/gsg3ug3ebnqnuu5qum0w.mp4">
                </video>
                <div style={{
                    textAlign: "center", fontFamily: 'Cormorant Unicase', color: 'white', position: 'absolute',
                    display: 'inline - block', top: "40%", width: "100%"
                }}>

                    <h4 style={{ fontSize: '5.5rem', textDecoration: 'underline white' }}><strong>- The Phone Cave -</strong></h4>
                    <br></br><Button variant="outline-secondary col-md-3" style={{ textAlign: "center", fontSize: '1.5rem' }} onClick={event => window.location.href = '/phones-list'}>
                        <strong>Take a look</strong></Button>
                </div>
            </div>
        </>
    )
}


export default IndexPage



