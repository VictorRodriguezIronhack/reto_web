
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>

            <h1>Hola</h1>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
            
        </>
    )
}

export default Home