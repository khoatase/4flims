import { LOGIN } from "../types";

const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        infoUser: {
          username: payload.username,
          password: payload.password,
        },
        token: payload.token,
        isAuthentication: true,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
