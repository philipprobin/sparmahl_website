import {useState} from "react";
import {initializeApp} from "firebase/app";
import {getFirestore, arrayUnion, updateDoc, doc} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const Newsletter = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
   // const [showDialog, setShowDialog] = useState(false)
    const [acceptedPrivacy, setAcceptedPrivacy] = useState(false)

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    async function addToNewsletter(event, email) {
        event.preventDefault()
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        try {
            const docRef = doc(db, "sparmahl_subscribers", "mails");
            await updateDoc(docRef, {
                mails: arrayUnion(email)
            })
            setSuccess(true);
            setSuccessMessage("Erfolgreich abonniert!");
        } catch (e) {
            setError(true);
            if (e.code === 'permission-denied') {
                setErrorMessage("Diese Email ist bereits registriert!")
            } else {
                setErrorMessage("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.")
            }
        }
    }

    return (
        <>
            <h1>TEST: {import.meta.env.VITE_FIREBASE_PROJECT_ID}</h1>
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
                                placeholder="Email Adresse"
                            />
                            <button
                                disabled={!isValidEmail(email) || !acceptedPrivacy}
                                className={`focus:outline-none focus:ring-offset-2 focus:ring border border-primary sm:border-transparent w-full sm:w-auto py-4 px-6 ${isValidEmail(email) && acceptedPrivacy ? 'bg-white hover:bg-opacity-85 text-orange-700 hover:text-orange-900' : 'text-gray-600'}`}>
                                Abonnieren
                            </button>
                        </form>
                        <label>
<input
                                onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                                type="checkbox"
                                className="mt-4"
                            />
                            Ich akzeptiere die
                            <a href="/datenschutzrichtlinien" target={'_blank'} className="text-primary"> Datenschutzbestimmungen</a>
                        </label>
                        {success && <div className="text-green-400 p-4 w-full text-center">{successMessage}</div>}
                        {error && <div className="text-red-600 p-4 w-full text-center">{errorMessage}</div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Newsletter;

