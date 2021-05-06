import { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { login } from "../../services/users-service";
import { AuthContext } from '../../contexts/AuthStore';

function LoginForm() {
  const { onUserChange } = useContext(AuthContext);
  const location = useLocation();
  const history = useHistory();

  const [state, setState] = useState({
    user: {
      email: location.state?.email || '',
      password: ''
    },
    errors: {}
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState(state => ({
      ...state,
      user: {
        ...state.user,
        [name]: value
      },
      errors: {}
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const user = await login(state.user.email, state.user.password);
      onUserChange(user);
      history.push('/');
    } catch (error) {
      const { message, errors } = error.response ? error.response.data : error;
      console.error(message);
      setState(state => ({
        ...state,
        errors: errors
      }))
    }
  }

  const { user, errors } = state;

  return (

      <form onSubmit={handleSubmit} className="my-1 mx-5 p-3">

        <h1><i className="fas fa-user-circle text-white"></i></h1>

        <div className="input-group mb-3 border-bottom border-secondary">
          <input
            type="email"
            name="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''} btn btn-dark text-start`}
            autoFocus
            required
            placeholder="Email"
            onChange={handleChange}
            value={user.email} />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

        <div className="mb-3 border-bottom border-secondary">
          <input
            type="password"
            name="password"
            className="form-control btn btn-dark text-start"
            required
            placeholder="Password"
            onChange={handleChange}
            value={user.password} />
        </div>

          <button 
            type="submit"
            name="Login"
            value="Login"
            className="btn btn-dark mt-4"
          >Login</button>

      </form>
 
  );
}

export default LoginForm;
