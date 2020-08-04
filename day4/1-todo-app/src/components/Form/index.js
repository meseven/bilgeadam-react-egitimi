import React from "react";

import validations from "./validations";

import { Formik } from "formik";

function Form() {
	const onSubmit = (values, bag) => {
		console.log(values);
		bag.setSubmitting(false);
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
					<div style={{ padding: 10 }}>
						<div>
							<form onSubmit={handleSubmit}>
								<input
									onChange={handleChange("text")}
									name="text"
									className="new-todo"
									value={values.text}
									placeholder="What needs to be done?"
									onBlur={() => setFieldTouched("text")}
									autoFocus
								/>

								{errors.text && touched.text && (
									<div style={{ color: "red" }}>{errors.text}</div>
								)}
							</form>
						</div>
					</div>
				)}
			</Formik>
		</>
	);
}

export default Form;
