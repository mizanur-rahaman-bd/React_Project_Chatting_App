import "./App.css";
import "../src/Components/Common/LoginRegister.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import app from "./firebase.config";
import { ToastContainer, toast } from "react-toastify";
import Home from "./Pages/Home";
import ForgetPassWord from "./Components/ForgetPassword/ForgetPassWord";
import LayoutOne from "./Layout/LayoutOne";
import AllUserPage from "./Pages/AllUserPage";
import FriendRequest from "./Pages/FriendRequest";
import SendReqPage from "./Pages/SendReqPage";
import FriendPage from "./Pages/FriendPage";

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Home />} />
          <Route path="/allusers" element={<AllUserPage />} />
          <Route path="/friendreq" element={<FriendRequest />} />
          <Route path="/sendreq" element={<SendReqPage />} />
          <Route path="/friends" element={<FriendPage />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassWord />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRoute} />
      <ToastContainer />
    </>
  );
}

export default App;
