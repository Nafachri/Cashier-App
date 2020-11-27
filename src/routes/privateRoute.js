import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Private Route = Custom Route, adalah sebuah route yang ingin di modifikasi fungsinya dan menerima props dari route tersebut
function PrivateRoute(props) {
  const store = useSelector((state) => state.login.isLogin);
  return (
    <Route {...props}>
      {store ? props.children : <Redirect to={{ pathname: "/login" }} />}
    </Route>
  );
}

// props.children adalah apapun children yang ada dibawah privateRoute akan ditampilkan
// kalau tidak maka akan Redirect ke halaman login
export default PrivateRoute;
