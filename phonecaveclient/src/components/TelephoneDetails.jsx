import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react"




function TelephoneDetails({telephoneDetails}) {

    const [endSpinner, setEndSpinner] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setEndSpinner(true)
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

        return (
            <>
                <div className="phoneDetails">
                
                    {endSpinner ? telephoneDetails && <>
                        
                    <p>{telephoneDetails.name}</p>
                    <p>{telephoneDetails.description}</p>
                        {(typeof (telephoneDetails.imageFileName) !== 'undefined') &&
                            
                        <img className="imgDetails" src={require(`./phoneImgs/${telephoneDetails.imageFileName}`)} />}
                </> :
                    <Box className="spinnerDetails" sx={{ display: 'flex' }}>
                    <CircularProgress />
                     </Box> }
            </div>
            </>
        )
    }

export default TelephoneDetails



