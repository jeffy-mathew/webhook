import "antd/dist/antd.css";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Homepage from "./homepage";

const App = () => {
  const generateRandomUUID = () => {
    return `/${uuidv4()}`
  }
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Redirect to={generateRandomUUID()} />
        </Route>
        <Route path="/:id">
          {console.log("routing to homepage", window.location.href)}
          <Homepage />
          {console.log("routed to homepage", window.location.href)}
        </Route>
      </Switch>
    </Router>
  )
};

export default App;
