import Brand from "./Brand";
import CategoryItem from "./CategoryItem";
import MenuButton from "./MenuButton";
import CartWidget from "./Cart/CartWidget";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Brand BrandName="M.L.L." />
        <MenuButton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <CategoryItem isActive={true} name="Cursos" />
            </li>
            <li className="nav-item">
              <CategoryItem isActive={false} name="Clases sueltas" />
            </li>
            <li className="nav-item">
              <CategoryItem isActive={false} name="Sobre nosotres" />
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
