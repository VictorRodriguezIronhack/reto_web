import { Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Galaxy from './Galaxy_S7.png'
import Honor from './Honor_10.png'
import IPhone from './IPhone_7.png'
import Moto from './Moto_G6.png'
import Nokia from './Nokia_7.1.jpg'
import p10 from './P10_Lite.jpg'
import Xiaomy from './Xiaomi_MI_A2.jpeg'
import ZenPhone from './ZenPhone_5.jpg'



export const PhoneCard = ({ id, name, manufacturer, description, ram, price, color, processor, screen, setView, setId, view, }) => {


    const [image, setImage] = useState('')

    const loadImage = () => {
        switch (name) {
            case 'iPhone 7':
                setImage(IPhone)
                break;

            case 'Galaxy S7':
                setImage(Galaxy)
                break;

            case 'Honor 10':
                setImage(Honor)
                break;

            case 'P10 Lite':
                setImage(p10)
                break;

            case 'Nokia 7.1':
                setImage(Nokia)
                break;

            case 'Zen Phone 5':
                setImage(ZenPhone)
                break;
            case 'MI A2':
                setImage(Xiaomy)
                break;
            case 'Moto G6':
                setImage(Moto)
                break;

            default:
                break;
        }
    }


    useEffect(() => {

        loadImage()

    }, [])



    return (

        <>
            {
                view === 'phones' ?

                    <Col xs={12} sm={4} md={4} lg={4}>

                        <a onClick={(e) => { e.preventDefault(); setId(id); setView('unique') }}>
                            <h3 className={'text-center'}>{name}</h3>
                            <img src={image} alt="" style={{ width: '100%' }} />
                        </a>

                    </Col>

                    :
                    <>
                        <Col xs={5} sm={5} md={5} lg={5} className={'mb-5'}>
                            <div>

                                <h3 className={'text-center'}>{name}</h3>
                                <img src={image} alt="phone" style={{ width: '100%', display: 'block', marginLeft: 'auto' }} />
                            </div>

                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} className={'mb-5 pt-5'}>
                            <p>Manufacturer: {manufacturer}</p>
                            <p>Color: {color}</p>
                            <p>screen: {screen}</p>
                            <p>Ram: {ram} gb</p>
                            <p>Processor: {processor}</p>
                            <p>Description: {description}</p>
                            <p>Price: {price} Euros</p>
                        </Col>

                        <button onClick={(e) => { e.preventDefault(); setView('phones') }}>Return</button>
                    </>
            }
        </>

    )




}