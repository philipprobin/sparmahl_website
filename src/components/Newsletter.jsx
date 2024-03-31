import {useState} from "react";
import axios from "axios";
const Newsletter = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    async function addToNewsletter(event, email) {
        event.preventDefault()
        await axios.post('http://localhost:3000/subscribe', {email: email}) // TODO ADD ENV files
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

                <div className="bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-4xl font-semibold leading-9 text-white text-center">
                        Nichts verpassen!
                    </h1>
                    <p className="text-base leading-normal text-center text-white mt-6">
                        Abonnieren Sie unseren Newsletter, um auf dem Laufenden zu bleiben!
                    </p>
                    <form onSubmit={(e) => addToNewsletter(e, email)} className="sm:border border-white flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
                            placeholder="Email Addresse"
                        />
                        <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">
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

