import Landing from './Landing'
import ThreeColumns from './ThreeColumns'

import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <Landing to="/phones" hero="hero1" msg="Review and compare mobile specs" btn="phones" img="https://res.cloudinary.com/aliciarojo/image/upload/v1610917534/celine-druguet--r5CoVha7lw-unsplash_jlkrrr.jpg" />
            <ThreeColumns />
            <Landing to="/login" hero="hero1" msg="Do you want to add a device?" btn="Login" img="https://res.cloudinary.com/aliciarojo/image/upload/v1610917544/jonah-pettrich-V-dfcNnb9OU-unsplash_xlphcx.jpg" />
        </>
    )
}

export default Home