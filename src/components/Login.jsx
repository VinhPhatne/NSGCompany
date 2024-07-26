import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import logo from "../public/logo.png";
import React from "react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1e1e1e",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "40px",
          backgroundColor: "#292929",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          marginRight: "200px",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          style={{ color: "#fff", marginBottom: "20px" }}
          component="h1"
        >
          LOGIN
        </Typography>
        <Formik initialValues={{ email: "", password: "", rememberMe: false }}>
          {({ handleChange, handleBlur, values }) => (
            <Form>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ color: "#fff" }}>Email</label>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="email"
                  type="email"
                  placeholder="Enter your email ... "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  InputProps={{ style: { color: "#fff" } }}
                  InputLabelProps={{ style: { color: "#aaa" } }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <label style={{ color: "#fff" }}>Password</label>
                <TextField
                  fullWidth
                  variant="outlined"
                  name="password"
                  type="password"
                  placeholder="Enter your password ... "
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  InputProps={{ style: { color: "#fff" } }}
                  InputLabelProps={{ style: { color: "#aaa" } }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <FormControlLabel
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  control={
                    <Checkbox
                      name="rememberMe"
                      checked={values.rememberMe}
                      onChange={handleChange}
                      style={{ color: "#fff" }}
                    />
                  }
                  label={
                    <Typography style={{ color: "#fff" }}>
                      Remember me
                    </Typography>
                  }
                />
                <Typography
                  style={{
                    color: "#f50057",
                    cursor: "pointer",
                  }}
                >
                  Forgot password?
                </Typography>
              </div>
              <Button
                fullWidth
                variant="contained"
                type="submit"
                style={{
                  background: "linear-gradient(to right, #ff416c, #ff4b2b)",
                  color: "#fff",
                  padding: "10px 0",
                  marginBottom: "20px",
                }}
              >
                Log in
              </Button>
              <Grid container>
                <Grid item xs>
                  <span style={{ color: "#aaa" }}>Don’t have an account? </span>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" style={{ color: "#ff4b2b" }}>
                    {"Create now"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
      <div
        style={{
          width: "1px",
          backgroundColor: "#fff",
          height: "100%",
          left: "100px",
        }}
      ></div>
      <div
        style={{
          marginLeft: "50px",
          textAlign: "center",
          color: "#fff",
          marginLeft: "150px",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ maxWidth: "100%", height: "40vh" }}
        />
        <Typography variant="h4">Welcome To NSGSecure</Typography>
        <Typography variant="h6" style={{ color: "#ffeb3b" }}>
          Enter into a NEW World of Surveillance
        </Typography>
      </div>
    </div>
  );
};

export default Login;
