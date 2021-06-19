import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MaterialForm from "./components/MaterialForm";
import Typography from "@material-ui/core/Typography";
import TSForm from "./components/TSForm";

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link className={classes.links} to="/fc-material-form">
              <Typography>FC - Material Form</Typography>
            </Link>
          </li>
          <li className={classes.li}>
            <Link className={classes.links} to="fc-ts-form">
              <Typography>FC - TypeScript Form</Typography>
            </Link>
          </li>
          <li className={classes.li}>
            <Link className={classes.links} to="cc-material-form">
              <Typography>CC - Material Form</Typography>
            </Link>
          </li>
          <li className={classes.li}>
            <Link className={classes.links} to="cc-ts-form">
              <Typography>CC - TypeScript Form</Typography>
            </Link>
          </li>
          <li className={classes.li}>
            <Link className={classes.links} to="prop-types">
              <Typography>Prop Types</Typography>
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/fc-material-form">
          <MaterialForm />
        </Route>
        <Route path="/fc-ts-form">
          <TSForm />
        </Route>
        <Route path="/cc-material-form">
          <MaterialForm />
        </Route>
        <Route path="/cc-ts-form">
          <MaterialForm />
        </Route>
        <Route path="/prop-types">
          <MaterialForm />
        </Route>
      </Switch>
    </Router>
  );
}

const useStyles = makeStyles((theme) => ({
  links: {
    textDecoration: "none",
    color: "black"
  },
  ul: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  li: {
    listStyleType: "none",
    margin: 0,
    padding: 0
  }
}));
