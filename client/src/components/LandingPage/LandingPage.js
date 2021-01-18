import TelephoneList from '../TelephoneList/TelephoneList'
import './LandingPage.css'

const LandingPage = props => {
    return (
        <>
            <section className='hero'>
                <div>
                    <h1 className="home-title">
                        <span>
                            Welcome to
                            <div className='underline-top' />
                        </span> <br/>
                        <span>
                            The Phone Cave
                             <div className='underline'/>
                        </span>
                    </h1>
                </div>
            </section>
            <section>
                <TelephoneList searchParams={props.searchParams} />
            </section>
        </>
    )
}

export default LandingPage