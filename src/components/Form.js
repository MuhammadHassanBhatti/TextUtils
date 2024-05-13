import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { forwardRef } from "react";

const Form = forwardRef(({ handleSubmit }, ref) => {
  return (
    <div className="container my-4">
      <Box
        component="form"
        onSubmit={handleSubmit}
        ref={ref}
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email-textField"
          label="E mail"
          variant="standard"
          name="email"
        />
        <TextField
          id="password-textField"
          label="Password"
          variant="standard"
          name="password"
        />
        <button style={{ marginTop: "28px" }} type="submit">
          Submit
        </button>
      </Box>
    </div>
  );
});

export default Form;
