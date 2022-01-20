import {ProductCard, ProductCardImg} from "../../elements/ProductCard";
import AddToCart from "../addToCart.js/AddToCart";
import DetailsLink from '../detailsLink/DetailsLink';

function PhonesListItem({phone}){

	return(

			<ProductCard>
				<DetailsLink id={phone._id} key={phone._id}>
					<ProductCardImg img={phone.imageFileName}/>
						<h4>{phone.name}</h4>
						<p>{phone.price}€</p>
				</DetailsLink>
				<AddToCart phone={phone}/>
			</ProductCard>

	)
}

export default PhonesListItem;