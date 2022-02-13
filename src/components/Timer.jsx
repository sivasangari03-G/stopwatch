import React, { useRef, useState } from "react";

export const Timer = () => {
	const [count, setCount] = useState([0, 0]);

	const timerId = useRef();
	const handleStart = () => {
		if (!timerId.current) {
			const id = setInterval(() => {
				setCount((prev) => {
                    console.log(prev);
                    if (prev[1] < 5) {
                        prev[1] = prev[1] + 1
                    }
					if (prev[1] === 5) {
						prev[0] = prev[0] + 1;
						prev[1] = 0;
					} 
					return [...prev];
				});
			}, 1000);
			timerId.current = id;
		}
	};

	return (
		<>
			<div>{`${count[0]} minute : ${count[1]} seconds`}</div>
			<button onClick={handleStart}>START</button>
		</>
	);
};
