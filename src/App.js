import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderPage from "./pages/orderPage";
import LoginPage from "./pages/loginPage";
import PrivateRoute from "./routes/privateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// Router ini untuk membuat halaman yang kita buat SPA (single page application) dimana bisa berpindah2 directory tanpad me load halaman
function App() {
  const dispatch = useDispatch();

  // Check Local Storage
  useEffect(() => {
    const userStatus = localStorage.getItem("userStatus");

    dispatch({
      type: "USER_LOGIN_STATUS",
      payload: { loginStatus: !!userStatus },
    });
  }, []);

  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact>
          <OrderPage />
        </PrivateRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
