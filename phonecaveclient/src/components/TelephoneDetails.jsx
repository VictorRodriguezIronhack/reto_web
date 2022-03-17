
import { useParams } from "react-router-dom"
const axios = require('axios');
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



function TelephoneDetails() {

    const { id } = useParams()

    const [telephoneDetails, setTelephoneDetails] = useState([])
    const [endSpinner, setEndSpinner] = useState(false)
    
    useEffect(() => {
        axios.get(`http://localhost:5005/api/${id}`)
            .then((res) => setTelephoneDetails(...res.data))
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setEndSpinner(true)
        }, 1000);
        return () => clearTimeout(timer);
    }, []);


        return (
            <><div className="phoneDetails">
                {endSpinner ? telephoneDetails && <> <p>{telephoneDetails.name}</p>
                    <p>{telephoneDetails.description}</p>
                    {(typeof (telephoneDetails.imageFileName) !== 'undefined') && <img className="imgDetails" src={require(`./phoneImgs/${telephoneDetails.imageFileName}`)} />}
                </> : <Box className="spinnerDetails" sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box> }
                
              
            </div>
            </>
        )
    }

export default TelephoneDetails

// if (typeof (book.cover) !== 'undefined') {
//     return (<img src={require(`../images/${book.cover}`)} />);
// } else {
// // error handling here
// ...
// }


