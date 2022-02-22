import { Link } from 'react-router-dom'
import "../Components/phones.css"

const Home = () => {
 
    return (
      <div className='phone'>
         <h1 className='welcome'>Welcome to <br>
         </br>The Phone Cave</h1>
         <Link className='homeButton link' to={"/phones"} >List phones</Link>
      </div>
    )
}

export default Home