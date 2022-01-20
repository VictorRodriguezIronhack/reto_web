import styled from "styled-components";

export const Button = styled.button`
	visibility: ${props => (props.hide ? "hidden" : "visible")};
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	background-color: palevioletred;
	color: #f7f7f7;
	cursor: pointer;
	outline: none;
	border: none;
`;

export const ButtonSmall = styled(Button)`
	font-size: 0.6em;
	margin: 0;
	padding: 0.25em 0.5em;
`;