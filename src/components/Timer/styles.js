import styled from 'styled-components';

export const Container = styled.div`
    display: grid;

    grid-area: "TM";
    grid-template-columns: 250px 250px 250px;
    grid-template-rows: 150px 150px 150px;
    
    grid-template-areas: 
        'PM1 PM2 PM3'
        'PM4 PM5 PM6'
        'PM7 PM8 PM9';

    overflow: hidden;

    grid-area: "TM";
    align-self: center;
    justify-self: center;

    background-color: var(--primary);
`;

export const Button = styled.button`
    padding: 5px 10px;
    min-width: 220px;

    border: 1px solid ${(props) => `var(--${props.color})`};
    border-radius: 10px;
    background-color: ${(props) => `var(--${props.color})`};

    cursor: pointer;

    color: var(--white);
    font-size: 35px;
`;

export const Clock = styled.div`
    color: var(--white);
    font-size: 80px;
    font-weight: bold;
`;

export const Pomodoro = styled.div`
    grid-area: "PM1";

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 250px;
    height: 150px;

    background-image: ${(props) => `url('${props.background}')`};
`;
