import {
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import { signUpSchema } from "../schema";

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  password: "",
  cpassword: "",
};

export default function Form() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema:signUpSchema,
    onSubmit: (values,action) => {
      console.log("value", values);
      action.resetForm();
    },
  });
  console.log("errrors",errors)
  //console.log("formik value", values);
  return (
    <div className="container">
      <Typography>Please Login First !!</Typography>
      <Card
        style={{ maxWidth: "550px", margin: "0 auto", padding: "20px 5px" }}
      >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  name="fname"
                  id="fname"
                  placeholder="Enter First Name"
                  autoComplete="off"
                  varient="outlined"
                  fullWidth
                  value= {values.fname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></TextField>
               { errors.fname && touched.fname ? (<p>{errors.fname} </p>) : null }
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  autoComplete="off"
                  name="lname"
                  id="lname"
                  placeholder="Enter Last Name"
                  varient="outlined"
                  fullWidth
                  value={values.lname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></TextField>
                { errors.lname && touched.lname ? (<p>{errors.lname} </p>) : null }
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  label="Email"
                  placeholder="Enter Your Email"
                  varient="outlined"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></TextField>
                { errors.email && touched.email ? (<p>{errors.email} </p>) : null }
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="number"
                  autoComplete="off"
                  name="phone"
                  id="phone"
                  label="Phone Number"
                  placeholder="Enter Your Number"
                  varient="outlined"
                  fullWidth
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></TextField>
                { errors.phone && touched.phone ? (<p>{errors.phone} </p>) : null }
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  label="Password"
                  placeholder="Enter Your password"
                  varient="outlined"
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></TextField>
                { errors.password && touched.password ? (<p>{errors.password} </p>) : null }
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="password"
                  autoComplete="off"
                  name="cpassword"
                  id="cpassword"
                  label="Confirm Password"
                  placeholder="Enter Your password again"
                  varient="outlined"
                  fullWidth
                  value={values.cpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></TextField>
               { errors.cpassword && touched.cpassword ? (<p>{errors.cpassword} </p>) : null }

              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  autoComplete="off"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
