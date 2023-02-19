import * as Yup from "yup";

export const signUpSchema = Yup.object({
    fname: Yup.string().min(2).max(25).required("Please Enter Your First Name"),
    lname: Yup.string().min(2).max(25).required("Please Enter Your Last Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    phone: Yup.string().min(10).required("Please Enter the correct phone number"),
    password: Yup.string().min(6).max(10).required("Please Enter Password"),
    cpassword: Yup.string().min(6).max(10).required("Please enter Confirm Password").oneOf([Yup.ref('password'),null], "Password Must Match")
})

