import { useState } from 'react';
import { useHistory } from 'react-router';
import service from '../../services/users-service';
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
const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_PATTERN = /^.{8,}$/;



const validations = {
    name: (value) => {
        let message;
        if (!value) {
            message = 'An user name is required'
        }
        return message;
    },
    email: (value) => {
        let message;
        if (!value) {
            message = 'A valid email is required';
        } else if (!EMAIL_PATTERN.test(value)) {
            message = 'The email is invalid';
        }
        return message;
    },
    password: (value) => {
        let message;
        if (!value) {
            message = 'A valid password is required';
        } else if (!PASSWORD_PATTERN.test(value)) {
            message = 'You need at least 8 chars';
        }
        return message;
    },
}



const RegisterForm = () => {

    const history = useHistory();
    const [state, setState] = useState({
        user: {
            name: '',
            email: '',
            password: '',
        },
        errors: {
            name: validations.name(),
            email: validations.email(),
            password: validations.password(),
        },
        touch: {}
    })


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
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isValid()) {
            try {
                const { user } = state;
                await service.register(user);
                history.push('/login', { email: user.email });
            } catch (error) {
                const { message, errors } = error && error.response ? error.response.data : error;
                console.error(message);
                setState(state => ({
                    ...state,
                    errors: errors || {}
                }));
            };
        };
    };

    const { user, errors, touch } = state;

    return (
        <Col lg="5">
            <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                        <small>Sign up with</small>
                    </div>
                    <div className="text-center">
                        <Button
                            className="btn-neutral btn-icon mr-4"
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
                            className="btn-neutral btn-icon ml-1"
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
                        <small>Or sign up with credentials</small>
                    </div>
                    <Form role="form" onSubmit={handleSubmit}>
                        <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="ni ni-hat-3" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="name" className={`form-control ${touch.name && errors.name ? "is-invalid" : ""
                        }`} required placeholder="Name" onBlur={handleBlur} onChange={handleChange} value={user.name} />
                        <div className="invalid-feedback">{errors.name}</div>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="ni ni-email-83" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="email" name="email" className={`form-control ${touch.email && errors.email ? "is-invalid" : "" }`} required placeholder="Email" onBlur={handleBlur} onChange={handleChange} value={user.email}/>
                        <div className="invalid-feedback">{errors.email}</div>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="password" name="password" className={`form-control ${touch.password && errors.password ? "is-invalid" : ""}`} required placeholder="Password" onBlur={handleBlur} onChange={handleChange} value={user.password}/>
                        <div className="invalid-feedback">{errors.password}</div>
                            </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                            <Button
                                className="mt-4"
                                color="primary"
                                type="submit"
                                disabled={!isValid()}
                            >
                                Create account
                          </Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
        </Col>
    )
}

export default RegisterForm;