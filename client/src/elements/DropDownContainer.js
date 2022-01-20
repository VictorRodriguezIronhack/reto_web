import styled from 'styled-components';

export const DropDownContainerShow = styled.div`
	position: relative;

	left: 0;
	width: 50%;
	background-color: #fff;
	border-radius: 0 0 5px 5px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
	z-index: 20;
`;

export const DropDownContainerHide = styled(DropDownContainerShow)`
	display: none;
`;