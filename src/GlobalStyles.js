import { createGlobalStyle } from 'styled-components'
import AlarmClock from './fonts/AlarmClock/alarmclock.ttf';
import BebasNeue from './fonts/BebasNeue/BebasNeue-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'AlarmClock';
        src: url(${AlarmClock}) format('TrueType');
    }

    @font-face {
        font-family: 'BebasNeue';
        src: url(${BebasNeue}) format('TrueType');
    }

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    html, body, #root {
        height:100%;
    }

    :root {
        --primary: #B8C4CC;
        --secondary: #2f3136;
        --tertiary: rgb(32,34,37);
        --quaternary: #292b2f;
        --quinary: #393d42;
        --senary: #828386;

        --black: #000000;
        --white: #FFFFFF;
        --green: #546B46;
        --blue: #50536B;
        --red: #6B3B3D;

        --button: #546B46;
        --hover: #405235;
    }
`;
