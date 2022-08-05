import { configureStore } from "@reduxjs/toolkit";
// import prectice from "../modules/prectice"
import counter from "../modules/prectice" 

const store = configureStore({
  reducer: {
		counter,
  },
});

export default store;