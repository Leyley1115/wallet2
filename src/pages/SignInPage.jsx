import { AuthForm } from '../components/AuthForm/AuthForm'

function SignInPage({ setIsAuth }) {
  return <AuthForm setIsAuth={setIsAuth} isSignUp={false} />
}

export default SignInPage
