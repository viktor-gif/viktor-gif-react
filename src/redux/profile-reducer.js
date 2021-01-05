import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_STATUS = "SET_STATUS";
const CHANGE_PHOTO_SUCCESS = "CHANGE_PHOTO_SUCCESS";

const initialState = {
  posts: [
    { id: 1, post: "Hello Olia!", likesCount: 12 },
    { id: 2, post: "Olchik Kvasolchik", likesCount: 33 },
    { id: 3, post: "rhrttjrjtyjetyjjy", likesCount: 25 },
    { id: 4, post: "etjtjrjtyjtyjji,iuuewew", likesCount: 45 },
  ],
  profileInfo: null,
  isFetching: false,
  status: "",
  updateProfileInfo: null,
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

    case DELETE_POST:
      return {
        ...state,
        posts: [...state.posts.filter((p) => p.id !== action.postId)],
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

    case CHANGE_PHOTO_SUCCESS:
      return {
        ...state,
        profileInfo: { ...state.profileInfo, photos: action.photos },
      };

    default:
      return state;
  }
};
//action-creators
export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
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
export const changePhotoSuccess = (photos) => ({
  type: CHANGE_PHOTO_SUCCESS,
  photos,
});

//thunk-creators
export const getUserPage = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await profileAPI.getProfile(userId);
  dispatch(setProfilePage(data));
  dispatch(toggleIsFetching(false));
};

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getUserStatus(userId).then((data) => {
    dispatch(setStatus(data));
  });
};

export const updateStatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateUserStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const changePhoto = (file) => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);

  if (data.resultCode === 0) {
    dispatch(changePhotoSuccess(data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.id;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserPage(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
