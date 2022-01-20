import {NavContainer, NavList, NavListItem, NavItemDrop, NavLink} from '../../elements/NavContainer';
import Cart from '../cart/Cart';
import DropDown from '../dropDown/DropDown';
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import {CartIcon, CartBubble} from '../../elements/CartContainer';

function MainNav(){

	const {cart} = useContext(CartContext);

	const totalProducts = cart.length


	return(
		<NavContainer>
			<NavList>
				<NavListItem>
					<NavLink to="/">
						<h1>The Phone Cave</h1>
					</NavLink>
				</NavListItem>
			</NavList>
			<NavItemDrop>
				<DropDown icon={<CartIcon/>} bubble={totalProducts > 0 && <CartBubble>{totalProducts}</CartBubble>} >
					<Cart />
				</DropDown>
			</NavItemDrop>
		</NavContainer>
	);
}

export default MainNav;