import axiosClient from "./axiosClient";

const userAPI = {
  getAllUser() {
    const url = "/users";
    return axiosClient.get(url);
  },
  getUser(id) {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
};

export default userAPI;
