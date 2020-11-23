import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const GET_AUTH_DATA = "GET_AUTH_DATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case GET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        // isAuth: true,
      };

    default:
      return state;
  }
};
//action-creaters
export const setAuthData = (id, login, email, isAuth) => ({
  type: GET_AUTH_DATA,
  data: { id, login, email, isAuth },
});

//thunk-creators
export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthData(id, login, email, true));
      }
    });
  };
};
export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
      const errorMessage =
        data.messages.length > 0 ? data.messages[0] : "some error";
      dispatch(stopSubmit("login", { _error: errorMessage }));
    });
  };
};
export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
