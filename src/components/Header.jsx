import React from "react";

const Headerneu = () => {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-xl font-bold">SparMahl</h1>
                </div>
                <nav className="flex items-center">
                    <a
                        href="https://www.instagram.com/sparmahlgbr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2"
                    >
                        <img src="src/assets/instagram-logo.png" alt="Instagram" className="h-6"/>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/sparmahl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2"
                    >
                        <img src="src/assets/linkedin-logo.png" alt="LinkedIn" className="h-6"/>
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61557298040792"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-2"
                    >
                        <img src="src/assets/facebook-logo.png" alt="Facebook" className="h-6"/>
                    </a>
                    <a href="/impressum" className="mx-2">
                        Impressum
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Headerneu;
