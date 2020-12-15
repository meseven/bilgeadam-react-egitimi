import * as yup from "yup";

const validations = yup.object().shape({
	firstName: yup
		.string()
		.min(2, "En az 2 karakter girilmelidir.")
		.max(10)
		.required("Bu alan zorunludur."),
	email: yup.string().email().required(),
	password: yup.string().min(5).required(),
	passwordConfirm: yup
		.string()
		.oneOf([yup.ref("password")], "Passwords not mathed.")
		.required(),
});

export default validations;
