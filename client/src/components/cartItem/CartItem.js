import { ProductCardCart } from "../../elements/ProductCard";
import { ButtonSmall } from "../../elements/Button";

function CartItem({phone, removeItem}){
	
	return(
			<ProductCardCart>
					<span>{phone.name}</span>
					<span>{phone.price}€</span>
					<ButtonSmall onClick={()=>removeItem(phone._id)}>
						Remove
					</ButtonSmall>
			</ProductCardCart>
	)
}

export default CartItem;