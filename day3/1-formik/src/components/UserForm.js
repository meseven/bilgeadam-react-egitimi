import React from "react";

import { Formik } from "formik";

function UserForm() {
	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
				passwordConfirm: "",
			}}
			onSubmit={() => alert("form submitted")}
			// validationSchema={validations}
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
			}) => (
				<div style={{ padding: 10 }}>
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
