import photo from "../images/wedding.jpg";

let renderEntireTree = () => {
  console.log("this is a callback-function");
};

let state = {
  profilePage: {
    posts: [
      { id: 1, post: "Hello Olia!", likesCount: 12 },
      { id: 2, post: "Olchik Kvasolchik", likesCount: 33 },
      { id: 3, post: "Оля вредна", likesCount: 25 },
      { id: 4, post: "Оля коханнячко", likesCount: 45 },
    ],
    newPostText: "",
  },
  dialogsPage: {
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
    newMessageText: "",
  },
  sidebar: {
    friends: [
      {
        id: 1,
        name: "Viktor Vorobey",
        image:
          "data:image/jpeg;base64,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",
      },
      {
        id: 2,
        name: "Sergey Shumak",
        image:
          "https://lugpost.su/uploads/posts/2018-11/medium/1541541058_5be20c94b9a45.jpg",
      },
      {
        id: 3,
        name: "Kit Semen",
        image:
          "https://lh3.googleusercontent.com/proxy/hRlSd5ve5oJwnHGi7pToPksMosKILw5-ShPE7vnW7Z7dFDfStWqGcIgMmoAXoLkYC-wQAVSVXBB0LdFmzjf3Jtevd2QmNQXTlUcK_Sw",
      },
      {
        id: 4,
        name: "Yarik Navrotskiy",
        image:
          "https://i.work.ua/sent_photo/d/3/0/d302648f7ffdc5a32408ec719faff71a.jpg",
      },
      {
        id: 5,
        name: "Ivan Ivanov",
        image:
          "https://2018.iforum.ua/wp-content/uploads/2018/03/Ivanov400d.jpg",
      },
      {
        id: 6,
        name: "Petr Petrov",
        image:
          "https://2018.iforum.ua/wp-content/uploads/2018/03/Ivanov400d.jpg",
      },
    ],
  },
};

//for profile
export const addPost = (newText) => {
  let lastPost = state.profilePage.posts.length - 1;
  let lastId = state.profilePage.posts[lastPost].id;

  let newPost = {
    id: ++lastId,
    post: newText,
    likesCount: Math.floor(Math.random() * 1000),
  };
  state.profilePage.posts.unshift(newPost);
  renderEntireTree();
  state.profilePage.newPostText = "";
};
export const updatePostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree();
};

//for messages
export const addMessage = (newText) => {
  let lastMesage = state.dialogsPage.messages.length - 1;
  let lastId = state.dialogsPage.messages[lastMesage].id;

  let newMessage = {
    id: ++lastId,
    message: newText,
  };
  state.dialogsPage.messages.push(newMessage);
  renderEntireTree();
  state.dialogsPage.newMessageText = "";
};
export const updateMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  renderEntireTree();
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};

export default state;
