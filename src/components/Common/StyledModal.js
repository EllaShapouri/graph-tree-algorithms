import styled from "styled-components";
import Modal from "styled-react-modal";

export const StyledModal = Modal.styled`
    width: 20rem;
    height: auto;
    max-height : 100vh;
    overflow-y : auto;
    overflow-x : hidden;
    display: flex;
    transition : .3s;
    border : .1em solid ${({ theme }) => theme.colors.secondary};
    z-index: 50;
    background-color: white;
    border-radius: 1.5em;
    -webkit-box-shadow: 0px 0px 15px -4px rgb(181, 120, 238);
    box-shadow: 0px 0px 15px -4px rgb(181, 120, 238);
`;
