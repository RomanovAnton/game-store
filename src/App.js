import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Header />
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
