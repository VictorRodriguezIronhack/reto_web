import styled from "styled-components";
import { Cart } from '@styled-icons/bootstrap/Cart'
import {DeleteBack2} from '@styled-icons/remix-fill/DeleteBack2'

export const CartContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	color: black;
	gap: 1rem;
	font-weight: 400;
`;

export const CardCart = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding: 0.5rem;
	white-space: nowrap;
	border-bottom: 1px solid #e6e6e6;
`;

export const RemoveIcon = styled(DeleteBack2)`
	width: 1.5rem;
	height: 1.5rem;
	cursor: pointer;
`;

export const CartIcon = styled(Cart)`
	width: 1.5rem;
	height: 1.5rem;
	cursor: pointer;
`;

export const CartBubble = styled.div`
	background-color: #f7f7f7;
	font-size: 0.9rem;
	color: palevioletred;
	position: absolute;
	text-align: center;
	top: 0.5rem;
	right: -0.7rem;
	width: 1.2rem;
	height: 1.2rem;
	border-radius: 50%;
	`;