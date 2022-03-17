import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react"
import{ Link} from "react-router-dom";







function Telephones({telephones, setTelephoneDetails}) {
   
    const [endSpinner, setEndSpinner] = useState(false)

   

    useEffect(() => {
        const timer = setTimeout(() => {
           setEndSpinner(true)
        }, 1500);
        return () => clearTimeout(timer);
    }, []);
   

     

    return (
        <>
           
            <div className="phoneList">
            {endSpinner ? telephones && telephones.map((tel) => {
          
                  
                  return  <Link to={{
                    pathname: `/${tel.id}`,
                }}
                            onClick={() => setTelephoneDetails(tel)}
                        key={tel.id} >
                    <p>{tel.name}</p>
                    <img className="imgPhones" src={require(`./phoneImgs/${tel.imageFileName}`)} />
                        </Link>
                
            }) :
                    <Box className="spinner" sx={{ display: 'flex' }}>
                <CircularProgress />
                </Box>}
            </div>
          </>
    )
}

export default Telephones

