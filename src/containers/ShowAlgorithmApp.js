import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./../pages/Homepage/Homepage";

function ShowAlgorithmApp() {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default ShowAlgorithmApp;
