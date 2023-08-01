import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField,Button } from "@mui/material";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export const Login = () => (
  <div style={{ padding: "50px" }}>
    <h1>Login</h1>
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        console.log(values)
        localStorage.setItem('myData', JSON.stringify(values));
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
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
            label="password"
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
          <br /><br />
        </Form>
      )}
    </Formik>
  </div>
);

