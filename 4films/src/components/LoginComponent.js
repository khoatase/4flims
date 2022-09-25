import React, { useState, useEffect } from "react";
import UserAPI from "../services/api/UserAPI";
// import getinfoUser from "../utils/token";
import { useNavigate } from "react-router-dom";
import actionCreator from "../utils/actionCreator";
import { LOGIN } from "../contexts/types";
import { useAuthContext } from "../contexts/AuthContext/AuthContext";
import getToken from "../utils/token";
const initialState = {
  username: "",
  password: "",
};
const LoginComponent = () => {
  const [infoLogin, setInfoLogin] = useState(initialState);
  const { state, dispatch } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/");
    }
  }, []);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInfoLogin({
      ...infoLogin,
      [name]: value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { username, password } = infoLogin;
    const infoUser = await checkLogin(username, password);
    const actionLogin = actionCreator(LOGIN, { ...infoUser });
    dispatch(actionLogin);
    navigate("/");
    setInfoLogin(initialState);
  };

  const checkLogin = async (username, password) => {
    try {
      const response = await UserAPI.login({ username, password });
      if (response.status === 200) {
        return response.data.infoUser;
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className="container__form">
      <div className="form_username">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          placeholder="Username"
          value={infoLogin.username}
          onChange={onChangeHandler}
        />
      </div>

      <div className="form_password">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          value={infoLogin.password}
          placeholder="Password"
          onChange={onChangeHandler}
        />
      </div>
      <input className="btn_login" type="submit" value="Login" />
    </form>
  );
};

export default LoginComponent;
