import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_STATUS = "SET_STATUS";

const initialState = {
  posts: [
    { id: 1, post: "Hello Olia!", likesCount: 12 },
    { id: 2, post: "Olchik Kvasolchik", likesCount: 33 },
    { id: 3, post: "Оля вредна", likesCount: 25 },
    { id: 4, post: "Оля коханнячко", likesCount: 45 },
  ],
  profileInfo: null,
  isFetching: false,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let lastPost = state.posts.length - 1;
      let lastId = state.posts[lastPost].id;
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: ++lastId,
            post: action.newPostText,
            likesCount: Math.floor(Math.random() * 1000),
          },
        ],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profileInfo: action.profileInfo,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};
//action-creators
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const setProfilePage = (profileInfo) => ({
  type: SET_USER_PROFILE,
  profileInfo,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

//thunk-creators
export const getUserPage = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    profileAPI.getProfile(userId).then((data) => {
      dispatch(setProfilePage(data));
      dispatch(toggleIsFetching(false));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
