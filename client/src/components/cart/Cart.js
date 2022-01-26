import { CartContainer } from "../../elements/CartContainer";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import CartItem from "../cartItem/CartItem";


function Cart(){
	
	const {cart, setCart} = useContext(CartContext);

	function removeItem(id){
		setCart(cart.filter(item => item._id !== id));
	}

	const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

	return(
		<CartContainer >
					{ !cart.length ? "Cart is empty" :
					<>
						{cart.map(phone => <CartItem key={phone._id} phone={phone} removeItem={removeItem}/>)}
						<span style={{fontWeight: "600"}}>Total: {totalPrice}€</span>
					</>
					}
		</CartContainer>
	);
}

export default Cart;