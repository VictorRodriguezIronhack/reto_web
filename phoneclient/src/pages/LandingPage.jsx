import React from "react"
import { Button, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const LandingPage = () => {

    const navigate = useNavigate()
    const seeResults = () => navigate("/phones")


    return (
        <>
            <p>Prueba técnica de Arseni Chirkov</p>

            <Button variant="success" onClick={seeResults} >Resultados</Button>
        </>
    )

}

export default LandingPage