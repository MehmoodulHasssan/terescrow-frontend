import * as Yup from "yup";

// signUp form validation
export const validationSignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .min(5, "First name must be at least 5 characters")
    .max(25, "First name can’t be longer than 25 characters"),

  lastName: Yup.string()
    .required("Last name is required")
    .min(5, "Last name must be at least 5 characters")
    .max(25, "Last name can’t be longer than 25 characters"),

  email: Yup.string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    ),

  userName: Yup.string().required("Username is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character"),

  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),

  phoneNumber: Yup.string()
    .matches(/^\d+$/, "Phone number must be numeric")
    .required("Phone number is required"),

  country: Yup.string().required("Country is required").oneOf(
    ["Nigeria", "Ghana", "Cameroon", "South Africa", "Kenya"], 
    "Invalid country"
  ),

  gender: Yup.string()
    .required("Gender is required")
    .oneOf(["male", "female", "other"], "Invalid gender"),

  termsAccepted: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});
