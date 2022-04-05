import styled from "styled-components";

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 100%;
    grid-template-rows: 100vh;
    
    grid-template-areas: 'TM';

    background-color: var(--primary);
`;