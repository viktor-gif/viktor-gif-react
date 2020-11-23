import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "8844171b-8f1f-4905-bc9a-c6a452eff646",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)

      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  setUserPage(userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getUserStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },
  updateUserStatus(status) {
    return instance
      .put(`profile/status`, { status: status })
      .then((response) => {
        return response.data;
      });
  },
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me/`).then((response) => {
      return response.data;
    });
  },
  login(email, password, rememberMe) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => {
        return response.data;
      });
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => {
      return response.data;
    });
  },
};
