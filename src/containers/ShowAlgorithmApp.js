import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetGraph from "../pages/Graph/GetGraph";
import ShowAlgorithm from "../pages/ShowAlgorithm/ShowAlgorithm";
import Homepage from "./../pages/Homepage/Homepage";

function ShowAlgorithmApp() {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/getflow" element={<GetGraph />} />
                    <Route path="/showalgorithm" element={<ShowAlgorithm />} />
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default ShowAlgorithmApp;
