
import backgroundImage from '../../../assets/banner-01.png';
import './PageOne.css';

export const PageOne = () => {
    return (
        <div
            className="page1-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="page1-content">
                <div className="page1-text-container">
                    {/* Title Animation */}
                    <h1 className="page1-title">
                        MAX I & US
                    </h1>

                    {/* Description Animation */}
                    <p className="page1-description">
                        Maxius is the only self-developed semiconductor company that focuses
                        on developing High-Performance Servers. We provide specialized
                        solutions tailored towards different sectors of the IT industry and
                        strive to break into the global market as a leader in server
                        technology.
                    </p>

                    {/* Ending Line Animation */}
                    <p className="page1-ending">
                        Together, we will be the best in value and speed.
                    </p>
                </div>
            </div>
        </div>
    );
};
