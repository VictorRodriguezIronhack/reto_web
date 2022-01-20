import {NavContainer, NavList, NavListItem, NavItemDrop} from '../../elements/NavContainer';
import Cart from '../cart/Cart';
import DropDown from '../dropDown/DropDown';
import {CartIcon} from '../../elements/CartContainer';

function MainNav(){
	return(
		<NavContainer>
			<NavList>
				
			
			</NavList>
			<NavItemDrop>
				<DropDown icon={<CartIcon/>}>
					<Cart />
				</DropDown>
			</NavItemDrop>
		</NavContainer>
	);
}

export default MainNav;