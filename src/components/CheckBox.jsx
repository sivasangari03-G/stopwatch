import React from "react";
import { ListCheckBox } from "./ListCheckBox";
export const CheckBox = ({ handleCheck, data }) => {
	return (
		<div>
			<h1>INSTRUCTIONS</h1>
			<ListCheckBox
				handleCheck={handleCheck}
				data={data}
				line={
					"Follow the instructions carefully and follow coding discipline"
				}
			/>
			<ListCheckBox
				handleCheck={handleCheck}
				data={data}
				line={
					"Indent your code correctly and stick to one kind of naming style"
				}
			/>
			<ListCheckBox
				handleCheck={handleCheck}
				data={data}
				line={
					"All components must be in different files and within a Components folder. CSS can be shared between components if desired. CSS modules must also be in your components folder."
				}
			/>
			<ListCheckBox
				handleCheck={handleCheck}
				data={data}
				line={
					"All static files like images must be in the public folder."
				}
			/>
			<ListCheckBox
				handleCheck={handleCheck}
				data={data}
				line={
					"All components files must have the same name as their compoenents. Eg: App must be in App.js."
				}
			/>
			<ListCheckBox
				handleCheck={handleCheck}
				data={data}
				line={
					"You must only call ReactDOM.render once in your index.js file!"
				}
			/>
		</div>
	);
};
