import LoginForm from '../components/users/LoginForm';
import './login.css';

function Login() {
  return (
    <div className="login-card row">
      <div className="col-12 col-sm-4 mx-auto">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
