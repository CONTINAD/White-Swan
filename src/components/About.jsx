import './About.css';
import { FaFeatherAlt } from 'react-icons/fa';

const About = () => {
    return (
        <section className="about">
            <div className="about-content">
                <h2 className="about-title">The Legend</h2>
                <p className="about-text">
                    In a market of chaos, the <span className="about-highlight">White Swan</span> emerges not as a black swan event of destruction, but as a beacon of resilience and grace.
                </p>
                <p className="about-text">
                    Clad in silver armor, we withstand the storms of volatility. We do not panic. We do not falter. We glide through the turbulent waters, swift and striking.
                </p>
                <p className="about-text">
                    Join the order. Embrace the elegance of strength.
                </p>

                <div className="about-decoration">
                    <FaFeatherAlt />
                </div>
            </div>
        </section>
    );
};

export default About;
