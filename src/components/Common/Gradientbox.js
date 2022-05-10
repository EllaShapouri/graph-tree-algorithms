import styled from "styled-components";
import Rectangle from "./../../assets/images/Rectangle.png";

export const Gradientbox = styled.div`
    background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.primary} 2.33%,
        ${({ theme }) => theme.colors.secondary} 96.51%
    );
    -webkit-box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.5);
    box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.5);
    border-radius: 1.5em 1.5em 1.5em 0;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    svg {
        width: 60px;
        position: relative;
        z-index: 10;
    }

    &::after {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 5;
        width: 100%;
        height: 100%;
        background-image: url(${Rectangle});
        opacity: 0.3;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left;
    }
`;

