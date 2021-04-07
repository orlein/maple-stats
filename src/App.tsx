import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import IndexPage from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
