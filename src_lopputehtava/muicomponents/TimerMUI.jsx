//https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e

import { useState, useEffect } from "react";

const TimerMUI = () => {

    const [time, setTime] = useState(0);

    const [paalla, setPaalla] = useState(false);

    useEffect(() => {
        let lisays;
        let aika = 0;
        if (paalla) {
            // javascript setInterval-metodi vaihtaa aikaa
            lisays = setInterval(() => setTime(time + 1), 10);
            aika = aika + lisays;
            console.log(aika);
        }
        return () => clearInterval(lisays);
    }, [paalla, time]);

    // useEffect(() => {
    //     onTimeChange(time)
    // }, [time, onTimeChange]);


    const muokkaaAikaa = (e) => {
        setTotalTime(alku => alku + kesto);
    };

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);

    //käynnistä/lopeta
    const startAndStop = () => {
        setPaalla(!paalla);
    };

    const reset = () => {
        setTime(0);
    };
    return (
        <div className="stopwatch-container">
            <p className="stopwatch-time">
                {hours}:{minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}
            </p>
            <div className="stopwatch-buttons">
                <button className="stopwatch-button" onClick={startAndStop}>
                    {paalla ? "Stop" : "Start"}
                </button>
                <button className="stopwatch-button" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );

};


export default TimerMUI;

