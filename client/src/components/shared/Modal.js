import React from 'react'

import './Modal.css'

function Modal({handleClose, show, children, info}) {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none'

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <h1 className="work">{info.manufacturer} - {info.name}</h1>
                <hr/>
                <p><strong>{info.description}</strong></p>
                <p>Product details:</p>
                <ul>
                    <li>Color: {info.color}</li>
                    <li>Screen: {info.screen}</li>
                    <li>Processor: {info.processor}</li>
                    <li>RAM: {info.ram}</li>
                </ul>
                <p className="price">{info.price} €</p>

                <div className="dark modal-btn">
                    <button className="btn btn-white" type="button" onClick={() => handleClose()}>Close</button>
                </div>
            </section>
        </div>
    )
}

export default Modal
