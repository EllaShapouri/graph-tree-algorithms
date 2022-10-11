import { Fragment } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import GetGraph from "../pages/Graph/GetGraph";
import ShowAlgorithm from "../pages/ShowAlgorithm/ShowAlgorithm";
import Homepage from "./../pages/Homepage/Homepage";

function ShowAlgorithmApp() {
    return (
        <Fragment>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/getflow" element={<GetGraph />} />
                    <Route path="/showalgorithm" element={<ShowAlgorithm />} />
                </Routes>
            </HashRouter>
        </Fragment>
    );
}

export default ShowAlgorithmApp;
