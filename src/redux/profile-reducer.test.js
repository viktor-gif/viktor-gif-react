import profileReducer, { addPost, deletePost } from "./profile-reducer";

const state = {
  posts: [
    { id: 1, post: "Hello Olia!", likesCount: 12 },
    { id: 2, post: "Olchik Kvasolchik", likesCount: 33 },
    { id: 3, post: "Оля вредна", likesCount: 25 },
    { id: 4, post: "Оля коханнячко", likesCount: 45 },
  ],
};

test("posts should be incremented", () => {
  const action = addPost("hello test");
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
});

test("new text of post should be correct", () => {
  const action = addPost("hello test");
  const newState = profileReducer(state, action);
  expect(newState.posts[newState.posts.length - 1].post).toBe("hello test");
});

test("posts should be decremented", () => {
  const action = deletePost(1);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(state.posts.length - 1);
});
