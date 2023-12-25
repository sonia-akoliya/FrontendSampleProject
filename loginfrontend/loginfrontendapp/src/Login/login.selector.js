import reducers from "./login.reducer";

export const selectSlice = (state) => state[reducers.name];

export const selectLoginUser = (state) => selectSlice(state).user;