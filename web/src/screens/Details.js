
import PhoneDetailsItem from '../components/phones/PhoneDetailsItem';


const Details = () => {
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
                    <PhoneDetailsItem />
                </div>
            </div>
        </main>
    )
}

export default Details;
