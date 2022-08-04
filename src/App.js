import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";

import {GlobalStyles, SpecialModalBackground} from "./components/GlobalStyles/GlobalStyles";
import ShowAlgorithmApp from "./containers/ShowAlgorithmApp";

import Theme from "./components/GlobalStyles/Theme";

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <ModalProvider backgroundComponent={SpecialModalBackground}>
                <GlobalStyles />
                <ShowAlgorithmApp />
            </ModalProvider>
        </ThemeProvider>
    );
}

export default App;
