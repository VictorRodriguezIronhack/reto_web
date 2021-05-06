import { useState } from 'react';
import { useHistory } from 'react-router';

import { register } from '../../services/users-service';

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_PATTERN = /^.{8,}$/;

const validations = {
  name: (value) => {
    let message;
    if (!value) {
      message = 'An user name is required';
    }
    return message;
  },
  email: (value) => {
    let message;
    if (!value) {
      message = 'A valid email is required';
    } else if (!EMAIL_PATTERN.test(value)) {
      message = 'the email is invalid';
    }
    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = 'A valid password is required';
    } else if (!PASSWORD_PATTERN.test(value)) {
      message = 'the password is invalid';
    }
    return message;
  }
}

function RegisterForm() {

  const history = useHistory();
  const [state, setState] = useState({
    user: {
      name: '',
      email: '',
      password: ''
    },
    errors: {
      name: validations.name(),
      email: validations.email(),
      password: validations.password()
    },
    touch: {}
  });

  const isValid = () => {
    const { errors } = state;
    return !Object.keys(errors).some(error => errors[error]);
  }

  const handleBlur = (event) => {
    const { name } = event.target;
    setState(state => ({
      ...state,
      touch: {
        ...state.touch,
        [name]: true
      }
    }));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState(state => ({
      ...state,
      user: {
        ...state.user,
        [name]: value
      },
      errors: {
        ...state.errors,
        [name]: validations[name] && validations[name](value)
      }
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      try {
        const { user } = state;
        await register(user);
        history.push('/login', { email: user.email });
      } catch (error) {
        const { message, errors } = error && error.response ? error.response.data : error;
        console.error(message);
        setState(state => ({
          ...state,
          errors: errors
        }))
      }
    }
  }

  const { user, errors, touch } = state;

  return (
    <form className="my-1 mx-5 p-3" onSubmit={handleSubmit}>

      <h1><i className="fas fa-user-circle text-white"></i></h1>
    
      <div className="input-group mb-3 border-bottom border-secondary">
        <input
          type="text"
          name="name"
          className={`form-control ${touch.name && errors.name ? 'is-invalid' : ''} btn btn-dark text-start`}
          placeholder="Username"
          onBlur={handleBlur}
          onChange={handleChange}
          value={user.name} />
        <div className="invalid-feedback">{errors.name}</div>
      </div>

      <div className="mb-3 border-bottom border-secondary">
        <input
          type="email"
          name="email"
          className={`form-control ${touch.email && errors.email ? 'is-invalid' : ''} btn btn-dark text-start`}
          placeholder="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={user.email} />
        <div className="invalid-feedback">{errors.email}</div>

      </div>

      <div className="mb-3 border-bottom border-secondary">
        <input
          type="password"
          name="password"
          className={`form-control ${touch.password && errors.password ? 'is-invalid' : ''} btn btn-dark text-start`}
          placeholder="Password"
          onBlur={handleBlur}
          onChange={handleChange}
          value={user.password} />
        <div className="invalid-feedback">{errors.password}</div>
      </div>


      <button
        type="submit"
        name="Register"
        disabled={!isValid()}
        className="btn btn-dark mt-4"
      >Register</button>


    </form>
  );
}

export default RegisterForm;
