import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  accessToken: string;
  user: {
    name: string;
    email: string;
  };
};
const LocalStorage: InitialStateType = JSON.parse(
  localStorage.getItem("user") as string,
);

const initialState: InitialStateType = {
  accessToken: LocalStorage?.accessToken,
  user: {
    name: LocalStorage?.user.name,
    email: LocalStorage?.user.email,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, { payload }: PayloadAction<InitialStateType>) {
      state.accessToken = payload.accessToken;
      state.user = payload.user;
      localStorage.setItem("user", JSON.stringify(state));
    },
    logout(state) {
      state.accessToken = "";
      state.user = { name: "", email: "" };
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
