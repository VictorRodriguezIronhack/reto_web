import './AllPhones.css'
import { useState, useEffect } from 'react'
import { phonesCall } from '../../services/phones.service'
import Spinner from '../Spinner/Spinner'
import PhoneCard from '../PhoneCard/PhoneCard.jsx'


function PopularMovies(props) {

    const [allPhones, setAllPhones] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        phonesCall()
            .then(response => { 
                setAllPhones(response.data)
                setIsLoading(false)
            })
            .catch(error => console.log(error))


//----- ESTE ESTÁ FUNCIONANDO -------        
        // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`)
        // // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=147b9c6e5e6d4e77350febe714463b30`)
        //     .then(response => response.json())
        //     .then(popularMovies => setPopularMovies(popularMovies.results))
        //     .catch(error => console.log(error))
//----- ESTE ESTÁ FUNCIONANDO -------        

    }, [])

    return (

        isLoading === true ? <Spinner /> :
        <div className="cards_at_Phones">
            {allPhones.map((movie) => <PhoneCard {...movie} key={movie.id} />)}
        </div>
    )
}

export default PopularMovies
