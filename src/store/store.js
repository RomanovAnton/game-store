import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import gameReducer from "./game/reducer";

export default configureStore({
  reducer: {
    cart: cartReducer,
    game: gameReducer,
  },
});
