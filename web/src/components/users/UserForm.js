import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthStore";
import service from "../../services/users-service";
import {
    Button,
    Card,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";

const EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const validations = {
    name: (value) => {
        let message;
        if (!value) {
            message = "Name is required";
        }
        return message;
    },
    email: (value) => {
        let message;
        if (!EMAIL_PATTERN.test(value)) {
            message = 'The email is invalid';
        }
        return message;
    },
    location: (value) => {
        let message;
        if (!value) {
            message = 'Your location is required';
        }
        return message;
    },
    description: (value) => {
        let message;
        if (value?.length < 15) {
            message = 'Your description needs at least 15 chars'
        }
        return message;
    }

}

const UserForm = () => {
    const { user, onUserChange } = useContext(AuthContext)
    const [state, setState] = useState({
        userProfile: {
            name: user.name,
            email: user.email,
            avatar: user.avatar,
            location: user.location,
            description: user.description
        },
        errors: {
            name: validations.name(user.name),
            email: validations.email(user.email),
            location: validations.location(user.location),
            description: validations.description(user.description)
        },
        touch: {},
    });


    const isValid = () => {
        const { errors } = state;
        return !Object.keys(errors).some(error => errors[error]);
    };

    const handleChange = (event) => {
        let { name, value } = event.target;
        if (event.target.files) {
            value = event.target.files[0];
        }

        setState(state => {
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    [name]: value,
                },
                errors: {
                    ...state.errors,
                    [name]: validations[name] && validations[name](value)
                },
            };
        });
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        setState((state) => ({
            ...state,
            touch: {
                ...state.touch,
                [name]: true,
            },
        }));
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (isValid()) {
            try {
                const userData = { ...state.userProfile };
                const updatedUser = await service.update(user.id, userData);
                onUserChange({ ...user, ...updatedUser })
            } catch (error) {
                const { message, errors } =
                    error && error.response ? error.response.data : error;
                console.error(message);
                setState((state) => ({
                    ...state,
                    errors: errors,
                }));
            }
        }
    };

    const { userProfile, errors, touch } = state;

    return (

            <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                        <small>Update your Profile information</small>
                    </div>
                    <Form role="form" onSubmit={handleSubmit}>
                    <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="ni ni-camera-compact" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="file" name="avatar" className={`form-control ${touch.avatar && errors.avatar ? "is-invalid" : ""}`} placeholder="Examine File" onBlur={handleBlur} onChange={handleChange} />
                                <div className="invalid-feedback">{errors.location}</div>
                            </InputGroup>
                        </FormGroup>

                        <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="ni ni-hat-3" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="name" className={`form-control ${touch.name && errors.name ? "is-invalid" : ""
                                    }`} required placeholder="Name" onBlur={handleBlur} onChange={handleChange} value={userProfile.name} />
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
                                <Input type="email" name="email" className={`form-control ${touch.email && errors.email ? "is-invalid" : ""}`} required placeholder="Email" onBlur={handleBlur} onChange={handleChange} value={userProfile.email} />
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
                                <Input type="password" name="password" className={`form-control ${touch.password && errors.password ? "is-invalid" : ""}`} placeholder="Password" onBlur={handleBlur} onChange={handleChange} value={userProfile.password} />
                                <div className="invalid-feedback">{errors.password}</div>
                            </InputGroup>
                        </FormGroup>

                        <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="ni ni-world" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input type="text" name="location" className={`form-control ${touch.location && errors.location ? "is-invalid" : ""}`} required placeholder="Location" onBlur={handleBlur} onChange={handleChange} value={userProfile.location} />
                                <div className="invalid-feedback">{errors.location}</div>
                            </InputGroup>
                        </FormGroup>

                        <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        <i className="ni ni-world" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <textarea type="text" name="description" className={`form-control ${touch.description && errors.description ? "is-invalid" : ""}`}  placeholder="A self description" onBlur={handleBlur} onChange={handleChange} value={userProfile.description} >{userProfile.description}</textarea>
                                <div className="invalid-feedback">{errors.description}</div>
                            </InputGroup>
                        </FormGroup>

                        <div className="text-center">
                            <Button
                                className="mt-4"
                                color="primary"
                                type="submit"
                                disabled={!isValid()}
                            >
                                Update account
                          </Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>              
    )
                
};

export default UserForm;

