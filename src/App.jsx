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

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
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
