import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField,Button } from "@mui/material";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .required("Required"),
});

export const SignUp = () => (
  <div style={{ padding: "50px" }}>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            error={Boolean(errors.firstName && touched.firstName)}
            helperText={
              errors.firstName && touched.firstName && String(errors.firstName)
            }
            onChange={(event) => {
              setFieldValue("firstName", event.target.value);
            }}
          />
          <br /><br />

          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            error={Boolean(errors.lastName && touched.lastName)}
            helperText={
              errors.lastName && touched.lastName && String(errors.lastName)
            }
            onChange={(event) => {
              setFieldValue("lastName", event.target.value);
            }}
          />

          <br /><br />

          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            error={Boolean(errors.email && touched.email)}
            helperText={errors.email && touched.email && String(errors.email)}
            onChange={(event) => {
              setFieldValue("email", event.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            error={Boolean(errors.password && touched.password)}
            helperText={
              errors.password && touched.password && String(errors.password)
            }
            onChange={(event) => {
              setFieldValue("password", event.target.value);
            }}
          />
          <br /><br />
          <Button variant="contained" color = "success" type = "submit">Submit</Button>
        </Form>
      )}
    </Formik>
  </div>
);

