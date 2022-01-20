import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
	top: 0;
	position: fixed;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: palevioletred;
	color: #f7f7f7;
	width: 100%;
	height: 70px;
	padding: 0 2rem;
`;

export const NavList = styled.ul`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	margin: 0;
	list-style: none;
`;

export const NavListItem = styled.li`
	background-color: transparent;
	outline: none;
	cursor: default;
	padding: 5px 22px;
	color: #f7f7f7;
	text-transform: capitalize;
	font-size: 0.90em;;
`
export const NavItemDrop = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	justify-content: center;
	height: 100%;
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	color: #f7f7f7;
	`;