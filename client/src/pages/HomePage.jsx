import { Link } from 'react-router-dom'

function HomePage() {

    return (
        <>
            <h1>The Phone Cave</h1>
            <Link to={"/telefonos"}>Phone List</Link>
        </>
    )
}

export default HomePage