import './PhoneCard.css'

function MovieCard({color, description, id, imageFileName, manufacturer, name, price, processor, ram, screen}) {

    return (
        <div>
                <div className="card-container" key={id}>
                    <img className="phone-cover" src={imageFileName} alt={name + 'IMG'}/>
                    <div className="phone-card">
                        <span className="card-title">{name} ~ {price}€</span>
                        {/* <h5 className="card-desc">Year: {release_date.slice(0, 4)}</h5> */}
                        <h5 className="card-desc">by: {manufacturer}</h5>
                        <button onClick={(event) => {event(id)}} className="card-button">Details Page</button>
                    </div>
                </div>
        </div>
    )
}

export default MovieCard