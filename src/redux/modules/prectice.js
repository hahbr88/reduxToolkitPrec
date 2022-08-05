import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

// 리듀서 counterSlice
export const counterSlice  = createSlice({
    name: "counter",
    initialState,
    reducers: {
          // 리듀서 안에 만든 함수 자체가 리듀서 로직이자, Action creator가 된다 ✨
      더하기: (스태이트, 액숀) => {
        스태이트.number = 스태이트.number + 액숀.payload;
      },
  
      빼기: (state, action) => {
        state.number = state.number - action.payload;
      },
    },
  });

export const { 더하기, 빼기 } = counterSlice.actions;
export default counterSlice.reducer