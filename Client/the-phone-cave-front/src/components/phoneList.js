import { useEffect, useState } from "react"
import axios from "axios"

const API_URL = "http://localhost:5005"

const PhoneList = ()=>{
    
    const [productList, setProductList] = useState([])
    const [showInfo, SetShowInfo] = useState(false) //<-------SERVES AS A TOGGLE FOR DISPLAYING PRODUCT DETAILS ------>
    const [selectedProduct, setSelectedProduct] = useState({})
    const [error, setError] = useState(null)
    
    useEffect( // <----------------------ON COMPONENT RENDER WE CALL OUR API TO GET OUR PHONE LIST -------------------->
        ()=>{
            axios
            .get(API_URL +"/telefonos")
            .then(response =>{ 
                
                setProductList(response.data) //<----------WE SET OUR PHONE LIST IN A STATE TO LATER MAP IT ----------->
            })
            .catch(err => setError(err))
        },
        [])
        


        const handleClick = ( phoneId)=>{ //<-------GETING SELECTED PRODUCT ID BY PARAMETER-------------->
            
            const filteredProduct = productList.filter( product => product.id === phoneId)  //<-----FILTERING PRODUCT LIST BY PROVIDED ID------->
            setSelectedProduct(filteredProduct[0])
            SetShowInfo(true)
        }

        const returnBack = ()=>{
            SetShowInfo(false)
        }
        
    return(
        <div id="list-container">

            {!showInfo && 
                
                <div id="list-wrapper">
                    {productList.map(product =>{
                        return(
                        
                            <div className="productCard" key={product.id}>
                                <img src={product.imageFileName} alt="" />
                                <h2>{product.name}</h2>
                                <p>Brand: {product.manufacturer}</p>
                                <p>price: {product.price}</p>
                                <button onClick={() =>{handleClick(product.id)}} id={product.id} > Show Info</button>
                            </div>
                        )
                    })}
                </div>
            
            }
           
            { showInfo &&

                <div id="detailCard" key={selectedProduct.id}>
                    <img src={selectedProduct.imageFileName} alt="" />
                    <div id="textContainer">
                        <h2>{selectedProduct.name}</h2>
                        <p>Brand: {selectedProduct.manufacturer}</p>
                        <p>Description: <br/> {selectedProduct.description}</p>
                        <p>Color: {selectedProduct.color}</p>
                        <p>price: {selectedProduct.price}</p>
                        <button onClick={returnBack} >Go Back</button>
                    </div>     
                </div> 

            }
                      
            {error && <h2>{error}</h2>}
        </div>
    )
}

export default PhoneList