import {useState} from 'react';
import { ButtonHeaderNew, HeaderBlock, HeaderLogo, Hover2, SHeader, Container, ButtonContainer, ActiveButton } from './Header.styled.js';


function Header({isAuth, setIsAuth}){
	const pageList = ['Мои расходы', 'Анализ расходов'];
	const [page, setPage] = useState(pageList[0]);
	
	function openState(){
		setIsAuth(false);
	}

	
    return (
        <SHeader>
			<Container>
				<HeaderBlock>
					<HeaderLogo>
						<a href="" target="_self"><img src="images/logo.svg" alt="logo"></img></a>
					</HeaderLogo>
                        {isAuth&&
							<ButtonContainer>
								{pageList.map((p) =>(
								<ButtonHeaderNew key={p} $active={page===p} onClick={() => {setPage(p)}}>{p}</ButtonHeaderNew>
								))}
                        	</ButtonContainer>
						}
						{isAuth &&
							<Hover2 to='/login' onClick = {openState}>Выход</Hover2>
						}
				</HeaderBlock>
			</Container>			
		</SHeader>
    )
}

export default Header;