import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-socials">
                    <a href="https://x.com/i/communities/2019886376833991043" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaTwitter />
                    </a>
                    {/* Telegram placeholder - remove if strictly no available */}
                </div>

                <div className="footer-ca">
                    CA: 5iC72jzRib1MpFRTrQSf8hibNEnMs9bGAeWVU87Npump
                </div>

                <p className="copyright">© 2026 White Swan. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
