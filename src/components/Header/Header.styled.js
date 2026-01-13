import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SHeader = styled.header`
	font-family: 'Montserrat';
    width: 100%;
	margin: 0 auto;
	background-color: #FFFFFF;
`;

export const HeaderBlock = styled.div`
    height: 70px;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
	position: relative;
	top: 0;
	left: 0;
	padding: 0 10px;
`;

export const HeaderLogo = styled.div`
    & img {
		width: 144px;
	}
`;

export const ButtonContainer = styled.div`
	font-weight: 400;
	display: flex;
	grid-gap: 48px;
`
export const ActiveButton = styled(ButtonContainer)`
	border-bottom: 2px solid #7334EA;
	padding-bottom: 1px;
	font-weight: 600;
	color: #7334EA;
`

export const ButtonHeaderNew = styled.button`
	font-family: 'Montserrat';
	border: none;
	background-color:transparent;
	color: ${({ $active }) => ($active ? '#7334EA' : '#000')};
	border-bottom: ${({ $active }) => ($active ? '1px solid #7334EA' : 'none')};
	font-size: 14px;
	font-weight: 400;


	&:hover{
		color: #7334EA;
		width: 600;
	}
`;

export const Hover2 = styled(Link)`
	text-decoration: none;
	font-weight: 600;
	color: #000000;

	&:hover {
			color: #7334EA;		
	}
`;

export const Container = styled.div`
	max-width: 1260px;
    width: 100%;        
    margin: 0 auto;   
    padding: 0 30px;
`;