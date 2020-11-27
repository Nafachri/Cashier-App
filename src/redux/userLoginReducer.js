const initialState = {
  isLogin: false,
  username: "kasirku",
  password: "operator001",
};

const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_STATUS":
      return {
        isLogin: action.payload.loginStatus,
        username: action.payload.username,
        password: action.payload.username,
      };
    default:
      return state;
  }
};

export default userLoginReducer;
