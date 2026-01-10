import { AuthForm } from '../components/AuthForm/AuthForm'

function SignUpPage({ setIsAuth }) {
  return <AuthForm setIsAuth={setIsAuth} isSignUp />
}

export default SignUpPage
