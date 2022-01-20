import styled from 'styled-components'

export const ProductCard = styled.div`

		display: flex;
		flex-direction: column;
		align-items: center;
		font-weight: bold;
		font-size: 1.2rem;
		border: 1px solid #000;
		border-radius: 5px;
		width: 20rem;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
	`;

export const ProductCardImg = styled.div`
	background-image: url(${props => props.img});
	background-size: cover;
	background-position: center;
	height: 150px;
	width: 120px;
`;



export default ProductCard;