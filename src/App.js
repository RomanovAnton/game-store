import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Header />
          <Cards />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
