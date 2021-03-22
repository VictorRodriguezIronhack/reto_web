import { Button } from 'react-bootstrap'
import './Index.css'


const IndexPage = () => {

    return (
        <>
            <div className="embed-responsive embed-responsive-16by9">
                <video
                    autoPlay loop src="https://res.cloudinary.com/demo/video/upload/c_pad,h_360,w_640/r_50/gsg3ug3ebnqnuu5qum0w.mp4">
                </video>
            </div>
            <div className="home" style={{ height: "500px" }}>
                <h4 style={{ padding: "0px 100px 40px 100px" }}>THE PHONE CAVE </h4>
                <Button variant="outline-info" className="btn-slide col-md-3" onClick={event => window.location.href = '/phones-list'}>
                    <strong>Take a look</strong></Button>
            </div>
        </>
    )
}


export default IndexPage



