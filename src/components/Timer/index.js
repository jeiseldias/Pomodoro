import React, { useEffect, useState } from "react";
import { Container, Button, Clock, Pomodoro } from './styles';

export default function Timer() {
    const [audio, setAudio] = useState(new Audio("/alert.ogg"))
    const [step, setStep] = useState(1);
    const [started, setStarted] = useState(false);
    const [secondsAmount, setSecondsAmount] = useState(1500);
    const [clock, setClock] = useState();
    const [textButton, setTextButton] = useState("INICIAR");
    const [colorButton, setColorButton] = useState("green");

    /* ------------------------------------- |
    |                                        |
    |---------------------------------------*/
    useEffect(() => {
        if(started) {
            if(secondsAmount == 0) {
                setStarted(false);
                setTextButton("INICIAR");
                setColorButton("green");
                setStep(state => state + 1);
                audio.play();
                return;
            }
        }
    }, [secondsAmount]);

    /* ------------------------------------- |
    |                                        |
    |---------------------------------------*/
    useEffect(() => {
        if(started) {
            setClock(setInterval(() => {
                setSecondsAmount(state => state - 1);
            }, 1000));
        } else {
            clearInterval(clock);
        }
    }, [started]);

    /* ------------------------------------- |
    |                                        |
    |---------------------------------------*/
    useEffect(() => {
        if(step > 8) {
            setStep(1);
        }
    }, [step]);

    /* ------------------------------------- |
    |                                        |
    |---------------------------------------*/
    function clickStart() {
        if(textButton == "INICIAR") {
            getSecondsPerStep();
            setTextButton("PARAR");
            setColorButton("red");
            setStarted(true);
        } else if(textButton == "PARAR") {
            setTextButton("RETOMAR");
            setColorButton("blue");
            setStarted(false);
        } else {
            setTextButton("PARAR");
            setColorButton("red");
            setStarted(true);
        }
    }

    /* ------------------------------------- |
    |                                        |
    |---------------------------------------*/
    function getSecondsPerStep() {
        switch(step) {
            case 1:
                setSecondsAmount(25 * 60);
                break;

            case 2:
                setSecondsAmount(5 * 60);
                break;
            
            case 3:
                setSecondsAmount(25 * 60);
                break;

            case 4:
                setSecondsAmount(5 * 60);
                break;

            case 5:
                setSecondsAmount(25 * 60);
                break;

            case 6:
                setSecondsAmount(5 * 60);
                break;

            case 7:
                setSecondsAmount(25 * 60);
                break;

            case 8:
                setSecondsAmount(15 * 60);
                break;
        }
    }

    /* ------------------------------------- |
    |                                        |
    |---------------------------------------*/
    const minutes = Math.floor(secondsAmount / 60);
    const seconds = secondsAmount % 60;

    return(
        <Container>
            {step >= 8 ? (
                <Pomodoro background={"/images/done9.png"} />
            ) : (
                <Pomodoro background={"/images/todo9.png"} />
            )
            }
            
            {step >= 1 ? (
                <Pomodoro background={"/images/done1.png"} />
            ) : (
                <Pomodoro background={"/images/todo1.png"} />
            )
            }
            
            {step >= 2 ? (
                <Pomodoro background={"/images/done2.png"} />
            ) : (
                <Pomodoro background={"/images/todo2.png"} />
            )
            }

            {step >= 7 ? (
                <Pomodoro background={"/images/done3.png"} />
            ) : (
                <Pomodoro background={"/images/todo3.png"} />
            )
            }

            <Pomodoro>
                <Clock>{String(minutes).padStart(2, '0') + ":" + String(seconds).padStart(2, '0')}</Clock>
                <Button onClick={clickStart} color={colorButton}>{textButton}</Button>
            </Pomodoro>

            {step >= 3 ? (
                <Pomodoro background={"/images/done5.png"} />
            ) : (
                <Pomodoro background={"/images/todo5.png"} />
            )
            }

            {step >= 6 ? (
                <Pomodoro background={"/images/done6.png"} />
            ) : (
                <Pomodoro background={"/images/todo6.png"} />
            )
            }

            {step >= 5 ? (
                <Pomodoro background={"/images/done7.png"} />
            ) : (
                <Pomodoro background={"/images/todo7.png"} />
            )
            }

            {step >= 4 ? (
                <Pomodoro background={"/images/done8.png"} />
            ) : (
                <Pomodoro background={"/images/todo8.png"} />
            )
            }
        </Container>
    )
}