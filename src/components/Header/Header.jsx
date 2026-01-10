import {useState} from 'react';
import { ButtonHeaderNew, HeaderBlock, HeaderLogo, Hover2, SHeader, Container, ButtonContainer, ActiveButton } from './Header.styled.js';


function Header(){
	const [state, setState] = useState(false);
	
	function openState(){
		setState(prev => !prev);
	}

	
    return (
        <SHeader>
			<Container>
				<HeaderBlock>
					<HeaderLogo>
						<a href="" target="_self"><img src="images/logo.svg" alt="logo"></img></a>
					</HeaderLogo>
                        <ButtonContainer>
                            <ActiveButton>Мои расходы</ActiveButton>
                            <ButtonHeaderNew>Анализ расходов</ButtonHeaderNew>
                        </ButtonContainer>
						<Hover2 href="#" to='/login' onClick = {openState}>Выход</Hover2>
				</HeaderBlock>
			</Container>			
		</SHeader>
    )
}

export default Header;