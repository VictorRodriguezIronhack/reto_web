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







function Telephones() {

    const [telephones, setTelephones] = useState()
    const [endSpinner, setEndSpinner] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:5005/api/telefonos")
            .then((res) => setTelephones(res.data))
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
           setEndSpinner(true)
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
   

     
    return (
        <>
           
            <div className="phoneList">
            {endSpinner ? telephones && telephones.map((tel) => {
                return <><Link to={`/${tel.id}`} ><p>{tel.name}</p><img className="imgPhones" src={require(`./phoneImgs/${tel.imageFileName}`)} /></Link></>
            }) : <Box className="spinner" sx={{ display: 'flex' }}>
                <CircularProgress />
                </Box>}
            </div>
          </>
    )
}

export default Telephones

