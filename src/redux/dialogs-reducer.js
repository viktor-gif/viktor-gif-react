import photo from "../images/wedding.jpg";

let ADD_MESSAGE = "ADD_MESSAGE";

const initialState = {
  dialogs: [
    { id: 1, name: "Olia", photo: photo },
    { id: 2, name: "Viktor", photo: photo },
    {
      id: 3,
      name: "Sergey",
      photo:
        "https://lugpost.su/uploads/posts/2018-11/medium/1541541058_5be20c94b9a45.jpg",
    },
    {
      id: 4,
      name: "Yulia",
      photo:
        "https://i.work.ua/sent_photo/1/2/7/127ce3d505a758ea5ceebec75c0b3249.jpg",
    },
  ],

  messages: [
    { id: 1, message: "Hello Olia!!!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "What are you doing?" },
    { id: 4, message: "You are the best!" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let lastMessage = state.messages.length - 1;
      let lastId = state.messages[lastMessage].id;
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: ++lastId,
            message: action.newMessageText,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export const addMessage = (newMessageText) => ({
  type: ADD_MESSAGE,
  newMessageText,
});

export default dialogsReducer;
