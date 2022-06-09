import styled from "styled-components";

export const Aside = styled.aside`
    font-size: 0.8em;
    background: ${({ theme }) => theme.colors.backgroundSide};
    background: ${({ theme }) => theme.colors.white};
    
    @media (min-width: 768px) {
        overflow-y: hidden;
        height: 100%;
        width: 18em;
        height: max-content;
        min-height: 100%;
    }
`;

export const SidebarWrapper = styled.div`
    padding: 2em 1em;
    height: max-content;
    min-height: 100%;
`;
