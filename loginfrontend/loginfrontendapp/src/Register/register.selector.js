import reducers from "./register.reducer";

export const selectSlice = (state) => state[reducers.name];

export const selectRegisterUser = (state) => selectSlice(state).user;