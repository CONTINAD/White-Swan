import { useState } from 'react';
import { FaCopy, FaCheck } from 'react-icons/fa';
import heroImage from '../assets/hero-swan.jpg';
import './Hero.css';

const Hero = () => {
    const [copied, setCopied] = useState(false);
    const CA = "5iC72jzRib1MpFRTrQSf8hibNEnMs9bGAeWVU87Npump";

    const handleCopy = () => {
        navigator.clipboard.writeText(CA);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="hero">
            <div className="hero-background">
                <img src={heroImage} alt="White Swan in Armor" className="hero-image" />
            </div>

            <div className="hero-content">
                <h1 className="hero-title">$WhiteSwan</h1>
                <p className="hero-subtitle">Grace in Chaos. Steel in the Storm.</p>

                <div className="ca-container" onClick={handleCopy}>
                    <span className="ca-text">{CA.slice(0, 6)}...{CA.slice(-6)}</span>
                    {copied ? <FaCheck className="copy-icon" /> : <FaCopy className="copy-icon" />}
                </div>

                <div className="cta-group">
                    <a href="https://pump.fun/5iC72jzRib1MpFRTrQSf8hibNEnMs9bGAeWVU87Npump" target="_blank" rel="noopener noreferrer" className="cta-button cta-pump">
                        Acquire
                    </a>
                    <a href="https://axiom.trade/t/5iC72jzRib1MpFRTrQSf8hibNEnMs9bGAeWVU87Npump/@noose?chain=sol" target="_blank" rel="noopener noreferrer" className="cta-button cta-axiom">
                        Buy on Axiom
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
