import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonHeaderNew, HeaderBlock, HeaderLogo, Hover2, SHeader, Container, ButtonContainer, ActiveButton } from './Header.styled.js';


function Header({isAuth, setIsAuth}){
	const navigate = useNavigate();
	const pageList = [ 
		{ 
			title: 'Мои расходы', 
			address: '/' }, 
		{ 
			title: 'Анализ расходов', 
			address: '/analysis' 
		} ];

	const [page, setPage] = useState(pageList[0].title);
	
	function openState(){
		setIsAuth(false);
	}

	const go = (title, address) => { 
		setPage(title); 
		navigate(address); 
	};

	
    return (
        <SHeader>
			<Container>
				<HeaderBlock>
					<HeaderLogo>
						<a href="" target="_self"><img src="images/logo.svg" alt="logo"></img></a>
					</HeaderLogo>
                        {isAuth&&
							<ButtonContainer>
								{pageList.map((p) => (
									<ButtonHeaderNew key={p.title} $active={page === p.title} onClick={() => go(p.title, p.address)}
									>
									{p.title}
									</ButtonHeaderNew>
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