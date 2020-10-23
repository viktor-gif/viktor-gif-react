let ADD_POST = "ADD_POST";
let UPDATE_POST_TEXT = "PDATE_POST_TEXT";

const initialState = {
  posts: [
    { id: 1, post: "Hello Olia!", likesCount: 12 },
    { id: 2, post: "Olchik Kvasolchik", likesCount: 33 },
    { id: 3, post: "Оля вредна", likesCount: 25 },
    { id: 4, post: "Оля коханнячко", likesCount: 45 },
  ],
  newPostText: "",
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

    default:
      return state;
  }
};

export const addPostAC = () => ({ type: ADD_POST });
export const updatePostTextAC = (text) => ({
  type: UPDATE_POST_TEXT,
  newText: text,
});

export default profileReducer;
