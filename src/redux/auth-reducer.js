import { stopSubmit } from "redux-form";
import { authAPI, headerAPI, securityAPI } from "../api/api";

const SET_AUTH_DATA = "SET_AUTH_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
//action-creaters
export const setAuthData = (id, login, email, isAuth, captchaUrl) => ({
  type: SET_AUTH_DATA,
  payload: { id, login, email, isAuth, captchaUrl },
});
const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
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

export const login = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then((data) => {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        if (data.resultCode === 10) {
          // debugger;
          dispatch(getCaptchaUrl());
        }
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
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  dispatch(getCaptchaUrlSuccess(response.data.url));
  console.log(response.data.url);
};

export default authReducer;
