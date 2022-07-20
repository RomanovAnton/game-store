import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
