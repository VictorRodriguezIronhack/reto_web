import axios from 'axios'

class PhoneService{
    constructor(){
        this.api=axios.create({baseURL: `${process.env.REACT_APP_API_URL}/phones`})
    }
getAllPhones=() =>{
  
    return this.api.get( '/getAllPhones')
    
}
getOnePhone=id=>{
    return this.api.get(`/getOnePhone/${id}`)
}

}

const phoneService= new PhoneService()
export default phoneService