import React from "react";

import { Formik } from "formik";
import validations from "./validations";

import Thumb from "./Thumb";

function UserForm() {
	const onSubmit = (values, bag) => {
		console.log(values);

		setTimeout(() => {
			bag.setSubmitting(false);
		}, 1000);
	};

	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
				passwordConfirm: "",
				file: null,
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
						<input
							id="file"
							name="file"
							type="file"
							onChange={(event) => {
								setFieldValue("file", event.currentTarget.files[0]);
							}}
							className="form-control"
						/>

						<Thumb file={values.file} />

						{/* {errors.email && touched.email && (
							<div style={{ color: "red" }}>{errors.email}</div>
						)} */}
					</div>

					<div>
						<input
							onChange={handleChange("email")}
							name="email"
							value={values.email}
							placeholder="e-mail"
							onBlur={() => setFieldTouched("email")}
						/>

						{errors.email && touched.email && (
							<div style={{ color: "red" }}>{errors.email}</div>
						)}
					</div>

					<div>
						<input
							onChange={handleChange("password")}
							name="password"
							value={values.password}
							placeholder="password"
							onBlur={() => setFieldTouched("password")}
						/>

						{errors.password && touched.password && (
							<div style={{ color: "red" }}>{errors.password}</div>
						)}
					</div>

					<div>
						<input
							type="text"
							onChange={handleChange("passwordConfirm")}
							name="passwordConfirm"
							value={values.passwordConfirm}
							placeholder="password confirmation"
							onBlur={() => setFieldTouched("passwordConfirm")}
						/>

						{errors.passwordConfirm && touched.passwordConfirm && (
							<div style={{ color: "red" }}>{errors.passwordConfirm}</div>
						)}
					</div>

					<input
						type="button"
						value="Join"
						disabled={!isValid || isSubmitting}
						onClick={handleSubmit}
						style={{ marginTop: 10 }}
					/>
					{isSubmitting && <div> Loading... </div>}
				</div>
			)}
		</Formik>
	);
}

export default UserForm;
