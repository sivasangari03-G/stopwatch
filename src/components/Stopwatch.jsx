import React, { useRef, useState } from "react";

export const Stopwatch = () => {
	const [count, setCount] = useState(0);
	const [final, setFinal] = useState('');
	const handleTime = (s) => {
		var min = Math.floor(s / 60);
		var sec = Math.floor(s % 60);
		setFinal(`${min} minutes : ${sec} Seconds`);
	};
	const timerId = useRef();
	const handleStart = () => {
		if (!timerId.current) {
			const id = setInterval(() => {
				setCount((prev) => {
					handleTime(prev + 1);
					return prev + 1;
				});
			}, 1000);
			timerId.current = id;
		}
	};
	const handlePause = () => {
		clearInterval(timerId.current);
		timerId.current = undefined;
    };
    const handleReset = () => {
		clearInterval(timerId.current);
        setCount(0);
        setFinal(`${0} minutes : ${0} Seconds`);
		//setTimerId(); // while clicking start id is passed to timerId and since we will run if timer id doesnt exist if we click stop or reset again we have to set timerId to undefied
		timerId.current = undefined;
	};

	return (
		<>
			<div>{final}</div>
			<button onClick={handleStart}>START</button>
			<button onClick={handlePause}>PAUSE</button>
			<button onClick={handleReset}>RESET</button>
		</>
	);
};
