import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Post Data ke server API berhasil, namun sekarang tinggal, apabila benar maka harus ke halaman orderpage

function LoginPage() {
  // Local State => menyimpan data input user
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //useSelector
  const loginStatus = useSelector((state) => state.login.isLogin);

  //useHistory
  const history = useHistory();

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
    localStorage.setItem("userStatus", true);
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
          loginStatus: userData.data,
          //   username: userData.data.username,
          //   password: userData.data.password,
          // },
        },
      });
    } catch (error) {
      console.log(error);
    }
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    if (loginStatus) {
      history.push("/");
    }
  }, [loginStatus]);

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
