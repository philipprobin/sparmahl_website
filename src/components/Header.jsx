import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn, faFacebookF, faInstagram} from '@fortawesome/free-brands-svg-icons';
import SparMahlBanner from '../assets/vectors/sparmahl-banner.svg'; // Adjust the path as necessary

const Header = () => {
    return (
        <header className="bg-primary text-white py-4">
            <div className="container mx-auto">
                {/* Wrapper div with sm:mx-4 for horizontal margins on small screens */}
                <div className="flex justify-between items-center mx-2">
                    {/* Logo */}
                    <img src={SparMahlBanner} alt="SparMahl Logo" className="sm:h-12 h-10"/>

                    {/* Navigation */}
                    <nav className="flex items-center space-x-4">
                        {/* LinkedIn Button */}
                        <a href="https://www.linkedin.com/company/sparmahl" target="_blank"
                           className="flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded transition duration-300"
                           rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} size="lg"/>
                        </a>
                        {/* Facebook Button */}
                        <a href="https://www.facebook.com/profile.php?id=61557298040792" target="_blank"
                           className="flex justify-center items-center bg-blue-800 hover:bg-blue-900 text-white w-10 h-10 rounded transition duration-300"
                           rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} size="lg"/>
                        </a>
                        {/* Instagram Button */}
                        <a href="https://www.instagram.com/sparmahlgbr/" target="_blank"
                           className="flex justify-center items-center bg-pink-600 hover:bg-pink-700 text-white w-10 h-10 rounded transition duration-300"
                           rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="lg"/>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
