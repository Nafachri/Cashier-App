import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

function LoginPage() {
  // Local State => menyimpan data input user
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //useDispatch
  const dispatch = useDispatch();

  // Handle User Input
  // 1. Username Handler
  function handleUsername(e) {
    setUsername(e.target.value);
  }

  // 2. Password Handler
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  // Membuat action creator untuk post data ke API (cara diluar redux)
  const handleSubmit = async (e) => {
    e.preventDefault();
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
          username: userData.data.username,
          password: userData.data.password,
        },
      });
    } catch (error) {
      console.log(error);
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <form>
        <input
          onChange={handleUsername}
          type="text"
          value={username}
          placeholder="username"
        ></input>
        <input
          onChange={handlePassword}
          type="password"
          value={password}
          placeholder="password"
        ></input>
        <input onClick={handleSubmit} type="submit" value="submit"></input>
      </form>
    </div>
  );
}
export default LoginPage;
