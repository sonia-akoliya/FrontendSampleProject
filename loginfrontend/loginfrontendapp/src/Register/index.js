import registerSection from "./register";
import * as registerActions from "./register.action";
import * as slice from "./register.reducer";
import * as selectors from "./register.selector";

export const {
 fetchRegisterUser
} = registerActions;

export const {
  name,
  reducer,
  actions: {
    setRegisterUser
  },
} = slice;

export const {
 selectRegisterUser
} = selectors;

export default registerSection;
