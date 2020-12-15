import React from "react";

import { useFormik } from "formik";
import validations from "./validations";

function Form() {
	const formik = useFormik({
		initialValues: {
			firstName: "Ahmet",
			email: "a@a.com",
			password: "12345",
			passwordConfirm: "12345",
		},
		validationSchema: validations,
		onSubmit: async (values, bag) => {
			console.log(bag);
			// await new Promise((r) => setTimeout(r, 2000));
			bag.resetForm();
			// bag.setErrors({ email: "Bu email zaten alınmış" });
			console.log(values);
		},
	});

	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<input
						id="firstName"
						name="firstName"
						type="text"
						placeholder="First Name"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.firstName}
						disabled={formik.isSubmitting}
					/>

					{formik.errors.firstName && formik.touched.firstName && (
						<div className="error">{formik.errors.firstName}</div>
					)}
				</div>
				<div>
					<input
						id="email"
						name="email"
						type="email"
						placeholder="E-mail"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
						disabled={formik.isSubmitting}
					/>

					{formik.errors.email && formik.touched.email && (
						<div className="error">{formik.errors.email}</div>
					)}
				</div>
				<div>
					<input
						id="password"
						name="password"
						type="password"
						placeholder="Password"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
						disabled={formik.isSubmitting}
					/>

					{formik.errors.password && formik.touched.password && (
						<div className="error">{formik.errors.password}</div>
					)}
				</div>
				<div>
					<input
						id="passwordConfirm"
						name="passwordConfirm"
						type="password"
						placeholder="Password Confirm"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.passwordConfirm}
						disabled={formik.isSubmitting}
					/>

					{formik.errors.passwordConfirm && formik.touched.passwordConfirm && (
						<div className="error">{formik.errors.passwordConfirm}</div>
					)}
				</div>
				<button type="submit" disabled={formik.isSubmitting}>
					{formik.isSubmitting ? "Loading..." : "Submit"}
				</button>
			</form>
		</div>
	);
}

export default Form;
