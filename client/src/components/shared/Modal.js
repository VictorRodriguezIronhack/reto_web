import React from 'react'

import './Modal.css'

function Modal({handleClose, show, children, info}) {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none'

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <h1>{info.manufacturer} - {info.name}</h1>
                <p>{info.description}</p>
                <p>Product details:</p>
                <ul>
                    <li>Color: {info.color}</li>
                    <li>Screen: {info.screen}</li>
                    <li>Processor: {info.processor}</li>
                    <li>RAM: {info.ram}</li>
                </ul>
                <p>{info.price} €</p>

                <button type="button" onClick={() => handleClose()}>Close</button>
            </section>
        </div>
    )
}

export default Modal
