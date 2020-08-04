import React, { useContext } from "react";

import TodoContext from "../../context/TodoContext";
import validations from "./validations";
import { Formik } from "formik";
import { v4 as uuidv4 } from "uuid";

function Form() {
	const { todos, setTodos } = useContext(TodoContext);

	const onSubmit = (values, bag) => {
		const data = {
			...values,
			completed: false,
			id: uuidv4(),
		};

		setTodos([data, ...todos]);

		bag.setSubmitting(false);
		bag.resetForm();
	};

	return (
		<>
			<Formik
				initialValues={{
					text: "",
				}}
				onSubmit={onSubmit}
				validationSchema={validations}
			>
				{({
					values,
					handleChange,
					handleSubmit,
					errors,
					touched,
					setFieldTouched,
					isValid,
					isSubmitting,
					setFieldValue,
				}) => (
					<form onSubmit={handleSubmit}>
						<input
							onChange={handleChange("text")}
							name="text"
							className="new-todo"
							value={values.text}
							placeholder="What needs to be done?"
							onBlur={() => setFieldTouched("text")}
						/>

						{errors.text && touched.text && (
							<div style={{ color: "red" }}>{errors.text}</div>
						)}
					</form>
				)}
			</Formik>
		</>
	);
}

export default Form;
