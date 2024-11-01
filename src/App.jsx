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

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRoute} />
    </>
  );
}

export default App;
