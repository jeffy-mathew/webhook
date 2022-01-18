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
      <div>
        <Switch>
          <Route path="/:id">
            <Homepage />
          </Route>
          <Route path="/">
            <Redirect to={generateRandomUUID()} />
          </Route>
        </Switch>
      </div>

    </Router>
  )
};

export default App;
