import { configureStore } from "@reduxjs/toolkit";
// import prectice from "../modules/prectice"
import counter from "../modules/prectice" 

const store = configureStore({
  reducers: {
		counter,
  },
});

export default store;