import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register, login } from "../../api/auth";
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
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(""); 
    const [fieldErrors, setFieldErrors] = useState({ name: false, email: false, password: false });

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
                    onChange={(e)=>{setName(e.target.value)}}
                    $error={fieldErrors.name}
                  /> 
                  <ModalInput 
                    type="password" 
                    name="password" 
                    placeholder="Пароль"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    $error={fieldErrors.password}
                    /> 
                  <ModalBtnEnter type='button' onClick={async () => {
                    const errors = {
                      name: name.trim() === "",
                      password: password.trim() === ""
                    };

                    if (errors.name || errors.password) {
                      setFieldErrors(errors);
                      setError("Заполните все поля");
                      return;
                    }

                    try {
                      await login({ name, password });
                      handleSubmit();
                      } catch (err) {
                      setError(err.message);

                      setFieldErrors({
                        name: true,
                        password: true
                      });
                    }
                  }}
                  >Войти</ModalBtnEnter> 
                </ModalFormLogin>
                <ModalFormGroup to='signup'>
                  {error && (
                  <p style={{ color: "red", marginTop: "-10px", textAlign: "center" }}>
                    {error}
                  </p>
                  )}
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
                    onChange={(e)=>{setName(e.target.value)}}
                    $error = {fieldErrors.name}
                  />

                  <ModalInput
                    type="email"
                    name="email"
                    placeholder="Эл. почта"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    $error={fieldErrors.email}
                  />

                  <ModalInput
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    onChange={(e)=>{setPassword(e.target.value)}}
                    $error={fieldErrors.password}
                  />

                  <ModalBtnEnter
                    type="button"
                    onClick={async () => {
                      const errors = {
                        name: name.trim() === "",
                        email: email.trim() === "",
                        password: password.trim() === ""
                      };

                      if (errors.name || errors.email || errors.password) {
                        setFieldErrors(errors);
                        setError("Заполните все поля");
                        return;
                      }

                      try {
                        await register({ name, email, password });
                        handleSubmit();
                      } catch (err) {
                        setError(err.message);
                        setFieldErrors({
                          name: true,
                          email: true,
                          password: true
                        });
                      }
                    }}
                  >
                    Зарегистрироваться
                  </ModalBtnEnter>

                </ModalFormLogin>
                <ModalFormGroup>
                  {error && (
                  <p style={{ color: "red", marginTop: "-10px", textAlign: "center" }}>
                    {error}
                  </p>
                  )}
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