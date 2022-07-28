import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import OrderPage from "./pages/OrderPage/OrderPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route  path="/card/:title">
          <GamePage />
        </Route>
        <Route  path="/order">
          <OrderPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
