import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import App from "../App";
import Todos from "./Todos";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" exact to="/">
          MLet
        </NavLink>
      </div>
      <div className="d-flex justify-content-end  w-100">
        <ul className="navbar-nav me-5 mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/todos">
              Todos List
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default function Routing() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}
