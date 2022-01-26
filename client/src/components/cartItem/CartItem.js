import { CardCart, RemoveIcon } from "../../elements/CartContainer";


function CartItem({phone, removeItem}){
	
	return(
			<CardCart>
					<div>{phone.name}</div>
					<div>{phone.price}€</div>
					<RemoveIcon onClick={()=>removeItem(phone._id)}/>
			</CardCart>
	)
}

export default CartItem;