import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "PDATE_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
  posts: [
    { id: 1, post: "Hello Olia!", likesCount: 12 },
    { id: 2, post: "Olchik Kvasolchik", likesCount: 33 },
    { id: 3, post: "Оля вредна", likesCount: 25 },
    { id: 4, post: "Оля коханнячко", likesCount: 45 },
  ],
  newPostText: "",
  profileInfo: null,
  isFetching: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let lastPost = state.posts.length - 1;
      let lastId = state.posts[lastPost].id;
      return {
        ...state,
        newPostText: "",
        posts: [
          ...state.posts,
          {
            id: ++lastId,
            post: state.newPostText,
            likesCount: Math.floor(Math.random() * 1000),
          },
        ],
      };

    case UPDATE_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
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

    default:
      return state;
  }
};
//action-creators
export const addPost = () => ({ type: ADD_POST });
export const onPostChange = (text) => ({
  type: UPDATE_POST_TEXT,
  newText: text,
});
export const setProfilePage = (profileInfo) => ({
  type: SET_USER_PROFILE,
  profileInfo,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

//thunk-creators
export const getUserPage = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    profileAPI.setUserPage(userId).then((data) => {
      dispatch(setProfilePage(data));
      dispatch(toggleIsFetching(false));
    });
  };
};

export default profileReducer;
