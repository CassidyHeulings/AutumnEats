import { BrowserRouter, Routes, Route } from "react-router-dom"
import Careers from "./Careers"
import ContactUs from "./ContactUs"
import Main from "./Main"
import OnlineOrder from "./OnlineOrdering/OnlineOrder"
import Directions from "./Directions"

export default function App() {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<Main />} />
                    <Route path = "/Careers" element = {<Careers />} />
                    <Route path = "/ContactUs" element = {<ContactUs />} />
                    <Route path = "/Main" element = {<Main />} />
                    <Route path = "/OnlineOrder" element = {<OnlineOrder />} />
                    <Route path = "/Directions" element = {<Directions />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}