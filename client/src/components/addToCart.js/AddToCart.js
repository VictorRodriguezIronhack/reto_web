import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {Button} from '../../elements/Button';

function AddToCart({phone}){
	
	const {cart, setCart} = useContext(CartContext);

	const alreadyInCart = cart.find(item => item._id === phone._id);

	function addToCart(phone){
		setCart([...cart, phone]);
	}

	return(

		!alreadyInCart && <Button onClick={()=>addToCart(phone)}>
			Add to cart
		</Button>
	);
}

export default AddToCart;