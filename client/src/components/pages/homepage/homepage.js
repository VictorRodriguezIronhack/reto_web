import { Link } from 'react-router-dom'
import BackgroundVideo from './Homepage.mp4'
import './homepage.css'


const Homepage = () => {

    return (
        <div className='homepage'>
            <h1>The Phone Cave</h1>
            <Link to='/telefonos'>Smartphones</Link>
            <video playsInline autoPlay muted loop className='homepage-Video'>
                <source src={BackgroundVideo} type='video/mp4' />
            </video>
            <div>

            </div>
        </div>

    )
}

export default Homepage