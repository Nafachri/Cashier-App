import axios from "axios";

const loginAction = (username, password) => async (dispatch) => {
  try {
    const userData = await axios({
      url: "http://creative-crimson.eddypermana.com/kasir-app/login",
      method: "POST",
      data: {
        username: username,
        password: password,
      },
    });
    console.log(userData);
    dispatch({
      type: "USER_LOGIN_STATUS",
      payload: {
        loginStatus: userData.data,
        //   username: userData.data.username,
        //   password: userData.data.password,
        // },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default loginAction;
