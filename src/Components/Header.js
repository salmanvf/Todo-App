import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar-main">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/todolist">TodoList</NavLink>
    </div>
  );
};

export default Header;
