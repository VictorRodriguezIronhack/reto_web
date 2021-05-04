import { useEffect } from "react";
import PhoneList from '../components/phones/PhoneList';

const Phones = () => {

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, [])

    return (
        <main>
            <div className="position-relative">
                <section className="section section-lg section-shaped pb-250">
                    <div className="shape shape-style-2 shape-primary">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
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
                <div className="container">
                    <PhoneList />
                </div>
            </div>
        </main>

    )

}

export default Phones;
