import React, { useState } from "react";
import styles from "./CheckBox.module.css";

export const ListCheckBox = ({line}) => {
	const [isStrike, setIsStrike] = useState(false);
	const [data, setData] = useState({});
	const handleCheck = (e) => {
		const { name, checked } = e.currentTarget;
		setIsStrike(!isStrike);

		setData({
			...data,
			[name]: checked,
		});
	};
	return (
		<div>
			<input
				name="box1"
				type="checkbox"
				checkbox={data.name}
				onChange={handleCheck}
			/>
			<span
				id="box1"
				className={isStrike ? styles.strike : styles.normal}
            >{ line }</span>
		</div>
	);
};
