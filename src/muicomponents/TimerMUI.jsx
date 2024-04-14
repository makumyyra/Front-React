//https://medium.com/how-to-react/simple-way-to-create-a-stopwatch-in-react-js-bcc0e08e041e

import { useState, useEffect } from "react";

const TimerMUI = () => {

    const [time, setTime] = useState(0);

    const [paalla, setPaalla] = useState(false);

    useEffect(() => {
        let lisays;
        if (paalla) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            lisays = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(lisays);
    }, [paalla, time]);

    // Hours calculation
    const hours = Math.floor(time / 360000);

    // Minutes calculation
    const minutes = Math.floor((time % 360000) / 6000);

    // Seconds calculation
    const seconds = Math.floor((time % 6000) / 100);


    // Method to start and stop timer
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

