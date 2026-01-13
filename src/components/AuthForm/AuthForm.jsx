import { useNavigate } from "react-router-dom";
import { 
    GlobalStyle,
    Wrapper,
    ContainerSignin,
    Modal,
    ModalBlock,
    ModalInput,
    ModalTitle,
    ModalBtnEnter,
    ModalFormGroup,
    ModalLink,
    ModalFormLogin,
 } from "./AuthForm.styled";

export function AuthForm({ isSignUp, setIsAuth }){
    const navigate = useNavigate();
    const handleSubmit = async () => {
        navigate('/');
        setIsAuth(true);
    }

    return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ContainerSignin>
          <Modal>
            {!isSignUp ? (
              <ModalBlock>
                <ModalTitle><h2>Вход</h2></ModalTitle>
                <ModalFormLogin> 
                  <ModalInput 
                    type="text" 
                    name="login" 
                    placeholder="Логин" 
                  /> 
                  <ModalInput 
                    type="password" 
                    name="password" 
                    placeholder="Пароль" 
                    /> 
                  <ModalBtnEnter type='button' onClick={()=>handleSubmit()} to='/'>Войти</ModalBtnEnter> 
                </ModalFormLogin>
                <ModalFormGroup to='signup'>
                    <p>Нужно зарегистрироваться?</p>
                    <p><ModalLink to="/signup"> Регистрируйтесь здесь</ModalLink></p>
                </ModalFormGroup>
              </ModalBlock>
            ) : (
              <ModalBlock>
                <ModalTitle><h2>Регистрация</h2></ModalTitle>
                <ModalFormLogin>
                  <ModalInput
                    type="text"
                    name="name"
                    placeholder="Имя"
                  />

                  <ModalInput
                    type="email"
                    name="login"
                    placeholder="Эл. почта"
                  />

                  <ModalInput
                    type="password"
                    name="password"
                    placeholder="Пароль"
                  />

                  <ModalBtnEnter>
                    Зарегистрироваться
                  </ModalBtnEnter>
                </ModalFormLogin>
                <ModalFormGroup>
                  <p>Уже есть аккаунт?<ModalLink to="/login"> Войдите здесь</ModalLink></p>
                </ModalFormGroup>
              </ModalBlock>
            )}
          </Modal>
        </ContainerSignin>
      </Wrapper>
    </>
    )
}