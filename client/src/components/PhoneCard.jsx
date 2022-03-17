import { Link } from "react-router-dom"

function PhoneCard({ phone }) {
    const { id, name } = phone

    return (
        <>
            <p>{name}</p>
            <Link to={`/telefonos/${id}`} state={{ phone }}>
                <button>Phone Details</button>
            </Link>
        </>
    )
}


export default PhoneCard