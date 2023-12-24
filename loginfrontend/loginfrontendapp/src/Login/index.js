import loginSection from "./login";
import * as loginActions from "./login.action";
import * as slice from "./login.reducer";
import * as selectors from "./login.selector";

export const {
 fetchLoginUser
} = loginActions;

export const {
  name,
  reducer,
  actions: {
    setLoginUser
  },
} = slice;

export const {
 selectLoginUser
} = selectors;

export default loginSection;
