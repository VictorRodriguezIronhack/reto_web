import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

export const ButtonSmall = styled(Button)`
	font-size: 0.6em;
	margin: 0;
	padding: 0.25em 0.5em;
`;