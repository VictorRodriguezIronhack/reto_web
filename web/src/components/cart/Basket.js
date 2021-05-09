
import { useContext, useEffect } from 'react';
import { Button } from 'reactstrap';
import { CartContext } from '../../contexts/CartStore';



const Basket = ({ cart, onAdd, onRemove }) => {
    const { onCartChange } = useContext(CartContext);


    const itemsPrice = cart.reduce((a, b) => a + b.price * b.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 400 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    useEffect(() => {
        if (cart) {
            onCartChange(cart)
        }
    },[onCartChange, cart])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart) || [])
    })

    return (
        <aside className="bg-secondary shadow border-0 p-3">
            <h3>Shopping Cart</h3>
            <div>
                {cart.length === 0 && <div>Cart is Empty</div>}
            </div>
            {cart?.map(item => (
                <div key={item.id} className="row mb-1">
                    <div className="col-lg-4">{item.name}</div>
                    <div className="col-lg-4">
                        <Button className="btn-1 ml-1" color="info" size="sm" style={{width: "1.5rem"}} onClick={() => onAdd(item)}>+</Button>
                        <Button className="btn-1 ml-1" color="danger" size="sm" style={{width: "1.5rem"}} onClick={() => onRemove(item)}>-</Button>
                    </div>
                    <div className="col-lg-4 text-right">
                            <p>{item.qty} x {item.price.toFixed(2)}</p>
                    </div>
                </div>
            ))}
            {cart.length !== 0 && (
                <>
                <hr/>
                <div className="row">
                    <div className="col-lg-6">Items Price</div>
                    <div className="col-lg-6 text-right">{itemsPrice.toFixed(2)} €</div>
                </div>
                <div className="row">
                    <div className="col-lg-6">Tax Price</div>
                    <div className="col-lg-6 text-right">{taxPrice.toFixed(2)} €</div>
                </div>
                <div className="row">
                    <div className="col-lg-6">Shipping Price</div>
                    <div className="col-lg-6 text-right">{shippingPrice.toFixed(2)} €</div>
                </div>
                <div className="row">
                    <div className="col-lg-6"><strong>Total Price</strong></div>
                    <div className="col-lg-6 text-right"><strong>{totalPrice.toFixed(2)} €</strong></div>
                </div>
                </>
            )}
        </aside>
    )
}

export default Basket;
