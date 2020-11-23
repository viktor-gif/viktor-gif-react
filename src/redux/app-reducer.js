import { getAuthUserData } from "./auth-reducer";

const INITIALIZE_SUCCESS = "INITIALIZE_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case INITIALIZE_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};
//action-creators
export const initializeSuccess = () => ({ type: INITIALIZE_SUCCESS });

//thunk-creators
export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializeSuccess());
  });
};

export default appReducer;
