import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DnDFlow from "../pages/Graph/GetGraph";

import Homepage from "./../pages/Homepage/Homepage";

function ShowAlgorithmApp() {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/getflow" element={<DnDFlow />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default ShowAlgorithmApp;
