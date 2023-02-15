import { createSlice } from "@reduxjs/toolkit";
import { data } from "../dummyData";

const initialState = {
  user: null,
  error: null,
  isLoggedIn: false,
};

const authUser = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const userData = data.find(
        (user) =>
          user.username === action.payload.username &&
          user.password === action.payload.password
      );

      if (userData) {
        state.user = userData;
        state.isLoggedIn = true;
        state.error = null;
      } else {
        state.user = null;
        state.error = { message: "Invalid Credentials" };
        state.isLoggedIn = false
      }
    },

    logOutUser(state) {
      state.user = null;
      state.error = null;
    },

    errorState(state) {
      state.error = null;
    },
  },
});

const { actions, reducer } = authUser;

export const { loginUser, errorState, logOutUser } = actions;
export default reducer;
