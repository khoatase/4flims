import axiosClient from "./AxiosClient";

const UserAPI = {
  login: ({ username, password }) => {
    const url = "auth/login";
    const body = {
      username,
      password,
    };
    return axiosClient.post(url, body);
  },
};

export default UserAPI;
