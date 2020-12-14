import { stopSubmit } from "redux-form";
import { authAPI, headerAPI } from "../api/api";

const SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
//action-creaters
export const setAuthData = (id, login, email, isAuth) => ({
  type: SET_AUTH_DATA,
  payload: { id, login, email, isAuth },
});

//thunk-creators
export const getAuthUserData = () => (dispatch) => {
  return headerAPI.authMe().then((data) => {
    if (data.resultCode === 0) {
      let { id, login, email } = data.data;
      dispatch(setAuthData(id, login, email, true));
    }
  });
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        const errorMessage = data.messages;
        dispatch(
          stopSubmit("login", {
            _error: errorMessage.length > 0 ? errorMessage[0] : "Some error",
          })
        );
      }
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
