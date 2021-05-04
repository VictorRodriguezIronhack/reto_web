import { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router";
import service from "../../services/users-service";
import { AuthContext } from "../../contexts/AuthStore";
import classnames from "classnames";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Col
} from "reactstrap";

const LoginForm = () => {
    const location = useLocation();
    const history = useHistory();
    const { onUserChange } = useContext(AuthContext)
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
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const user = await service.login(state.user.email, state.user.password);
            onUserChange(user)
            history.push('/telefonos')
        } catch (error) {
            const { message, errors } = error.response ? error.response.data : error;
            console.error(message);
            setState(state => ({
                ...state,
                errors: errors
            }));
        };
    };


    const { user, errors } = state;


    return (
        <Col className="mb-lg-auto" lg="5">
                <div className="transform-perspective-right">
                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Sign in with</small>
                      </div>
                      <div className="btn-wrapper text-center">
                        <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src="/icons/common/github.svg"
                            />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </Button>
                        <Button
                          className="btn-neutral btn-icon"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <span className="btn-inner--icon mr-1">
                            <img
                              alt="..."
                              src="/icons/common/google.svg"
                            />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div>
                      <Form role="form" onSubmit={handleSubmit}>
                        <FormGroup
                          className={classnames("mb-3", {
                            focused: state.emailFocused
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="email" name="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        required placeholder="user@example.org" onChange={handleChange} value={user.email} />
                        <div className="invalid-feedback">{errors.email}</div>
                          </InputGroup>
                        </FormGroup>
                        <FormGroup
                          className={classnames({
                            focused: state.passwordFocused
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input type="password" name="password" className="form-control"
                        required placeholder="Password" onChange={handleChange} value={user.password}/>
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                          >
                            Sign in
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </div>
              </Col>
    )
};

export default LoginForm;