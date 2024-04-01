import {useState} from "react";
import axios from "axios";

const Newsletter = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    async function addToNewsletter(event, email) {
        event.preventDefault()
        await axios.post(import.meta.env.VITE_NEWSLETTER_API, {email: email}) // .env.local file erstellen und VITE_NEWSLETTER_API=https://localhost:3000/subscribe eintragen (SIEHE https://vitejs.dev/guide/env-and-mode)
            .then((response) => {
                setSuccess(true);
                setSuccessMessage(response.data.message)
                setTimeout(() => {
                    setSuccess(false);
                }, 15_000)
            })
            .catch(error => {
                if (error.response && error.response.status === 400 && error.response.data && error.response.data.error) {
                    console.log(error.response.data.error)
                    setErrorMessage(error.response.data.error)
                }
                setError(true);
                setTimeout(() => {
                    setError(false);
                }, 15_000)
            });
    }

    return (
        <div className="2xl:mx-auto 2xl:container mx-4 ">
            <div className="w-full relative flex items-center justify-center">

                <div
                    className="bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-4xl font-semibold leading-9 text-primary text-center">
                        Nichts verpassen!
                    </h1>
                    <p className="text-base leading-normal text-center text-primary mt-6">
                        Abonnieren Sie unseren Newsletter, um auf dem Laufenden zu bleiben!
                    </p>
                    <form onSubmit={(e) => addToNewsletter(e, email)}
                          className="sm:border border-primary flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-primary sm:border-transparent text-base w-full font-medium leading-none text-primary p-4 focus:outline-none bg-transparent placeholder-primary"
                            placeholder="Email Addresse"
                        />
                        <button
                            disabled={!email}
                            className={`focus:outline-none focus:ring-offset-2 focus:ring border border-primary sm:border-transparent w-full sm:w-auto py-4 px-6 ${email ? 'bg-white hover:bg-opacity-85 text-orange-700 hover:text-orange-900' : 'text-gray-600'}`}>
                            Abonnieren
                        </button>
                    </form>
                    {success && <div className="text-green-400 p-4 w-full text-center">{successMessage}</div>}
                    {error && <div className="text-red-600 p-4 w-full text-center">{errorMessage}</div>}
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

