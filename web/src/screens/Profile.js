import { useContext, useEffect, useState } from "react";
import service from '../services/users-service';
import { useParams } from 'react-router';
import { Card, Container, Row, Col, Button } from "reactstrap";
import UserForm from "../components/users/UserForm";
import { AuthContext } from "../contexts/AuthStore";
import { Fragment } from "react";


const Profile = () => {
    const { user } = useContext(AuthContext);
    const params = useParams();
    const [state, setState] = useState({
        profile: "",
        loading: false,
        showForm: false
    })

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        async function fetchProfile() {
            setState(state => ({
                ...state,
                loading: true
            }))
            const profile = await service.userProfile(params.id);
            if (!isUnmounted) {
                setState({
                    profile: profile,
                    loading: false
                })
            }
        }
        let isUnmounted = false;
        fetchProfile()
        return () => {
            isUnmounted = true;
        }

    }, [params])

    const handleForm = () => {
        setState((state) => ({
            ...state,
            showForm: !state.showForm
        }))
    }

    const { profile, loading, showForm } = state; 
    return (
        <main className="profile-page">
            <section className="section-profile-cover section-shaped my-0">
                {/* Circles background */}
                <div className="shape shape-style-1 shape-default alpha-4">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <Container className="shape-container d-flex align-items-center py-lg">
                    <div className="col px-0" style={{ marginBottom: "150px" }}>
                        <Row className="align-items-center justify-content-center">
                            <Col className="text-center" lg="6">
                                <h3 className="display-2 mb-0">
                                    Your Profile
                    </h3>
                            </Col>
                        </Row>
                    </div>
                </Container>
                {/* SVG separator */}
                <div className="separator separator-bottom separator-skew">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="fill-white"
                            points="2560 0 2560 100 0 100"
                        />
                    </svg>
                </div>
            </section>
            {loading && <div className="d-flex justify-content-center align-items-center"><img src="/loading.gif" alt="Loading..." /></div>}
            <section className="section">
                <Container>
                    <Card className="card-profile shadow mt--300">
                        <div className="px-4">
                            <Row className="justify-content-center">
                                <Col className="order-lg-2" lg="3">
                                    <div className="card-profile-image">
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img
                                                alt={profile.name}
                                                className="rounded-circle"
                                                src={profile.avatar}
                                            />
                                        </a>
                                    </div>
                                </Col>
                                <Col
                                    className="order-lg-3 text-lg-right align-self-lg-center"
                                    lg="4"
                                >
                                    <div className="card-profile-actions py-4 mt-lg-0">
                                            <a href="https://facebook.com" className="btn btn-just-icon btn-link btn-facebook mr-4"><i className="fa fa-facebook"></i></a>
                                            <a href="https://twitter.com" className="btn btn-just-icon btn-link btn-twitter float-right"><i className="fa fa-twitter"></i></a>
                                    </div>
                                </Col>
                                <Col className="order-lg-1" lg="4">
                                    <div className="card-profile-stats d-flex justify-content-center">
                                        <div>
                                            <span className="heading">{profile?.opinions?.length}</span>
                                            <span className="description">Opinions</span>
                                        </div>
                                        <div>
                                            <span className="heading">{profile?.purchases?.length}</span>
                                            <span className="description">Purchases</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="text-center mt-5">
                                <h3>
                                    {profile.name}
                                </h3>
                                <div className="h6 font-weight-300">
                                    <i className="ni location_pin mr-2" />
                                    {profile.location}
                                </div>

                            </div>
                            <div className="mt-5 py-5 border-top text-center">
                                <Row className="justify-content-center">
                                    {!profile.description ? 
                                    <Col lg="9">
                                        <p>Add some self description!</p>
                                    </Col>
                                    :
                                    <Col lg="9">
                                        <p>
                                            {profile?.description}
                                        </p>
                                    </Col>    
                                }
                                </Row>
                            </div>
                        </div>
                    </Card>
                </Container>
            </section>
            {profile.id === user.id &&
                <Fragment>
                    <section className="d-flex justify-content-center">
                        <Button
                            className="btn-icon btn-2 mb-4"
                            color="primary"
                            type="button"
                            onClick={() => handleForm()}
                        > 
                            <span className="btn-inner--icon">
                                <i className="ni ni-circle-08" />
                            </span>
                            {!showForm ? <span className="btn-inner--text">Update Profile</span> : <span className="btn-inner--text">Close</span>}
                        </Button>
                    </section>
                    <section className="d-flex justify-content-center mb-4">
                        {showForm &&
                            <UserForm />
                        }
                    </section>
                </Fragment>
            }
        </main>
    )
}

export default Profile;
