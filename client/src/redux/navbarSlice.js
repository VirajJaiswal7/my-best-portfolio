import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    navbar: true,
  },
  reducers: {
    setNavbar: (state, action) => {
      state.navbar = action.payload;
    },
  },
});

export const { setNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
