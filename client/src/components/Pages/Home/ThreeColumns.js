import { Link } from 'react-router-dom';
import './ThreeColumns.css'

const ThreeColumns = () => {
    return (
        <>
            <div className="pricing-box-container">
                <div className="pricing-box text-center">
                    <p className="price">Top-notch tech</p>
                    <ul className="features-list">
                        <li><strong>Look our list of models</strong></li>
                        <li><strong>Look details for each device</strong></li>

                    </ul>
                    {/* <button className="btn-primary">Get Started</button> */}
                </div>
                <div className="pricing-box pricing-box-bg-image text-center">
                    <div className="onTop">
                    <p className="price">ADD DEVICES</p>
                    <ul className="features-list">
                        <li><strong>Upload your own device pic</strong></li>
                        <li><strong>Change the specs of your device</strong></li>
                    </ul>
                    <Link to="/phones">
                        <button className="btn-primary">Look mobiles</button>
                        </Link>
                    </div>
                </div>
                <div className="pricing-box text-center">
                    <p className="price">On the cloud</p>
                    <ul className="features-list">
                        <li><strong>See changes instantly</strong></li>
                        <li><strong>No fees or subscriptions</strong></li>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default ThreeColumns;