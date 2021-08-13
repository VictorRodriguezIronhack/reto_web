import { Link } from "react-router-dom"


const Cards = ({ phones }) => {

    return (
        <>
            {
                phones.map(elm =>

                    <Link className="nav-link" to={`/details/${elm.id}`} >

                        <div className="phones-card" key={elm.id}>
                            <img src={`http://localhost:5000/static/images/${elm.imageFileName}`} alt={elm.name} />
                            <h4> {elm.name}</h4>
                            <p><strong>Color:</strong> {elm.color}</p>
                            <p><strong>Price:</strong> {elm.price}</p>
                        </div>
                    </Link>
                )
            }
        </>
    )
}
export default Cards