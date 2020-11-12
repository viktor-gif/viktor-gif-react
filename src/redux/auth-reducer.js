import { headerAPI } from "../api/api";

const GET_AUTH_DATA = "GET_AUTH_DATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTH_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};
//action-creaters
export const getAuthData = (id, login, email) => ({
  type: GET_AUTH_DATA,
  data: { id, login, email },
});

//thunk-creators
export const getAuthUserData = () => {
  return (dispatch) => {
    headerAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(getAuthData(id, login, email));
      }
    });
  };
};

export default authReducer;
