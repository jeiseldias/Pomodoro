import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--primary);
`;

export const Button = styled.button`
    padding: 0.5vw 3vw;
    min-width: 10vw;

    border: 1px solid ${(props) => `var(--${props.color})`};
    border-radius: 10px;
    background-color: ${(props) => `var(--${props.color})`};

    cursor: pointer;

    color: var(--white);
    font-family: "BebasNeue";
    font-size: 2vw;
`;

export const Clock = styled.div`
    color: var(--black);
    font-family: "AlarmClock";
    font-size: 5vw;
    font-weight: bold;
`;

export const Grid = styled.div`
    width: 750px;
    height: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
`;

export const Pomodoro = styled.div`
    width: 33%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
`;
