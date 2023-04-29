import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: null,
  admintoken: null,
};

export const authSlice = createSlice({
  name: "adminauth",
  initialState,
  reducers: {
    setAdminLogin: (state, action) => {
      state.admin = action.payload.admin;
      state.admintoken = action.payload.admintoken;
    },
    setAdminLogout: (state) => {
      state.admin = null;
      state.admintoken = null;
    }
  },
});

export const {  setAdminLogin, setAdminLogout } =
  authSlice.actions;
export default authSlice.reducer;