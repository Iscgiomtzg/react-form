import "../styles.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

const MaterialForm = () => {
  const classes = useStyles();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  let errorMessage;

  const validateForm = () => {
    const { name, email, password } = form;
    if (!name || !email || !password) {
      return true;
    } else {
      return false;
    }
  };

  const validateEmail = () => {
    const { email } = form;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.toLocaleLowerCase)) {
      return re.test(email.toLocaleLowerCase);
    } else {
      errorMessage = "Email is not valid";
    }
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("Uploading form...", form);
  };
  return (
    <form onSubmit={submit} className={classes.root} autocomplete="off">
      <TextField
        id="name"
        label="Name"
        value={form.name}
        onChange={({ target }) => {
          setForm({ ...form, name: target.value });
        }}
        className={classes.input}
        placeholder="Ex"
      />
      <TextField
        id="email"
        label="Email"
        onChange={({ target }) => {
          setForm({ ...form, email: target.value });
        }}
        className={classes.input}
      />
      {errorMessage && <span>{errorMessage}</span>}
      <TextField
        id="password"
        label="Password"
        onChange={({ target }) => {
          setForm({ ...form, password: target.value });
        }}
        className={classes.input}
      />
      <input
        type="submit"
        disabled={validateForm() || validateEmail()}
        value="Submit"
        className={classes.submitButton}
      />
    </form>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
    margin: "1%",
    padding: 10
  },
  input: {
    width: "50%",
    margin: "1%"
  },
  submitButton: {
    padding: 10,
    backgroundColor: "white"
  }
}));

export default MaterialForm;
