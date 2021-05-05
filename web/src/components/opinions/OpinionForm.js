import { useState } from "react";
import { FaStar } from 'react-icons/fa'
import service from "../../services/phones-service";
import { useHistory } from 'react-router';
import { 
    Card,
    CardBody,
    CardHeader,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap';

const validations = {
    title: (value) => {
        let message;
        if (!value) {
            message = "Title is required";
        } else if (value.length < 5) {
            message = "Title needs at least 5 chars"
        }
        return message
    },
    rate: (value) => {
        let message;
        if (!value) {
            message = "Rate is required"
        }
        return message
    },
    text: (value) => {
        let message;
        if (!value) {
            message = "Text is required";
        }
        return message
    },
};

const OpinionForm = ({ phone }) => {

    const history = useHistory();

    const [state, setState] = useState({
        opinion: {
            title: "",
            rate: 0,
            text: "",
        },
        errors: {
            title: validations.title(),
            text: validations.text(),
        },
        touch: {},
    });

    const [hover, setHover] = useState(null)

    const isValid = () => {
        const { errors } = state;
        return !Object.keys(errors).some(error => errors[error]);
    };

    const handleOpinionChange = (rate) => {
        setState((state) => ({
            ...state,
            opinion: {
                ...state.opinion,
                rate: rate
            }
        }))
    }

    const handleChange = (event) => {
        let { name, value } = event.target;

        setState(state => {
            return {
                ...state,
                opinion: {
                    ...state.opinion,
                    [name]: value,
                },
                errors: {
                    ...state.errors,
                    [name]: validations[name] && validations[name](value),
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
        try {
            const opinionData = { ...state.opinion }
            await service.createOpinion(phone.id, opinionData)
            history.push(`/telefonos/${phone.id}`)
        } catch (error) {
            const { message, errors } =
                error && error.response ? error.response.data : error;
            console.error(message);
            setState((state) => ({
                ...state,
                errors: errors,
            }));
        }
    };



    const { opinion, errors, touch } = state;

    return (
        <form onSubmit={handleSubmit}>
            <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-2">
                    <h3 className="heading-title text-info mb-0">Send your Opinion</h3>
                </CardHeader>
                <CardBody className="px-lg-3 py-lg-3">
                    <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fa fa-tag fa-fw" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                name="title"
                                type="text"
                                className={`form-control ${touch.title && errors.title ? "is-invalid" : ""
                                    }`}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={opinion.title}
                                id="title"
                                placeholder="Rating Title"
                            />
                            <div className="invalid-feedback">{errors.title}</div>
                        </InputGroup>
                    </FormGroup>

                    <div className="input-group mb-3">
                        {[...Array(5)].map((star, i) => {
                            const opinionValue = i + 1;
                            return (
                                <label key={i} className="star">
                                    <input type="radio" name="rate" value={opinionValue} onClick={() => handleOpinionChange(opinionValue)} />
                                    <FaStar size={20} color={opinionValue <= (hover || state.opinion.rate) ? "#ffc107" : "#e4e5e9"}
                                        onMouseEnter={() => setHover(opinionValue)}
                                        onMouseLeave={() => setHover(null)}
                                    />
                                </label>
                            )
                        })}
                    </div>

                    <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <i className="fa fa-edit fa-fw" />
                                </InputGroupText>
                            </InputGroupAddon>
                            <textarea
                                name="text"
                                type="text"
                                className={`form-control ${touch.text && errors.text ? "is-invalid" : ""
                                    }`}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={opinion.text}
                                id="text"
                                placeholder="Opinion Text"
                                rows="4"
                            ></textarea>
                            <div className="invalid-feedback">{errors.text}</div>
                        </InputGroup>
                    </FormGroup>

                    <button className="btn btn-primary mb-3" type="submit" disabled={!isValid()}>
                        Submit!
                </button>
                </CardBody>
            </Card>
        </form>
    );
};

export default OpinionForm;