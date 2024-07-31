import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Link,
  Grid,
} from "@mui/material";
import { Formik, Form } from "formik";
import logo from "../public/logo.jpeg";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-stone-900 p-4 sm:p-0">
      <div className="flex flex-col sm:flex-row w-full sm:w-5/6 max-w-5xl">
        <div className="flex flex-col justify-center w-full sm:w-1/2 p-5 sm:p-10 bg-gray-400 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none">
          <div className="bg-black p-5 sm:p-10 rounded-lg shadow-lg border border-gray-700">
            <Typography
              variant="h4"
              component="h1"
              className="text-white mb-5 text-center"
            >
              LOGIN
            </Typography>
            <Formik
              initialValues={{ email: "", password: "", rememberMe: false }}
            >
              {({ handleChange, handleBlur, values }) => (
                <Form>
                  <div className="mb-5">
                    <div className="flex items-center mb-2">
                      <PersonIcon
                        style={{ color: "#fff", marginRight: "8px" }}
                      />
                      <label className="text-white">Email</label>
                    </div>
                    <TextField
                      className="bg-[#222121]"
                      fullWidth
                      variant="outlined"
                      name="email"
                      type="email"
                      placeholder="Enter your email..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      InputProps={{
                        style: { color: "#fff" },
                      }}
                      InputLabelProps={{ style: { color: "#aaa" } }}
                    />
                  </div>
                  <div className="mb-5">
                    <div className="flex items-center mb-2">
                      <LockIcon style={{ color: "#fff", marginRight: "8px" }} />
                      <label className="text-white">Password</label>
                    </div>
                    <TextField
                      className="bg-[#222121]"
                      fullWidth
                      variant="outlined"
                      name="password"
                      type="password"
                      placeholder="************"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      InputProps={{ style: { color: "#fff" } }}
                      InputLabelProps={{ style: { color: "#aaa" } }}
                    />
                  </div>
                  <div className="flex justify-between items-center mb-5">
                    <FormControlLabel
                      className="flex items-center"
                      control={
                        <Checkbox
                          name="rememberMe"
                          checked={values.rememberMe}
                          onChange={handleChange}
                          style={{ color: "#fff" }}
                        />
                      }
                      label={
                        <Typography className="text-white">
                          Remember me
                        </Typography>
                      }
                    />
                    <Typography className="text-pink-500 cursor-pointer">
                      Forgot password?
                    </Typography>
                  </div>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-2 mb-5"
                  >
                    Log in
                  </Button>
                  <Grid container className="mt-5">
                    <Grid item xs>
                      <span className="text-gray-400">
                        Don’t have an account?{" "}
                      </span>
                    </Grid>
                    <Grid item>
                      <Link
                        href="#"
                        variant="body2"
                        className="text-orange-500"
                      >
                        {"Create now"}
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full sm:w-1/2  bg-black rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none">
          <img
            src={logo}
            alt="Logo"
            className="h-32 sm:h-40 mb-5 sm:mb-10"
            style={{ marginTop: "20px" }}
          />
          <Typography variant="h4" className="text-white mb-2 text-center">
            Welcome To NSGSecure
          </Typography>
          <Typography variant="h6" className="text-yellow-500 text-center">
            Enter into a NEW World of Surveillance
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Login;
