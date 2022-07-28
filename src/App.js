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
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/card/:title">
          <GamePage />
        </Route>
        <Route exact path="/order">
          <OrderPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
