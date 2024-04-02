import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Imprint from "./pages/Imprint.jsx";
import Privacy from "./pages/Privacy.jsx";

function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/"  element={<Home />}/>
                <Route path="/impressum"  element={<Imprint />}/>
                <Route path="/datenschutzrichtlinien"  element={<Privacy />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
