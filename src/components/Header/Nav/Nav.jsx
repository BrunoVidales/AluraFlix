import { Link }  from "react-router-dom";

const Nav = ({ isNewVideoPage }) => {

  return (
    <nav className="nav container">
          <img src="/logo.png" alt="Logo AluraFlix" />
          <div className="nav__btns">
              <Link className={`nav__btn ${!isNewVideoPage ? 'nav__btn-active' : 'nav__btn-desactive'}`} to="/" >Home</Link>
              <Link className={`nav__btn ${!isNewVideoPage ? 'nav__btn-desactive' : 'nav__btn-active'}`} to="/nuevo-video" >Nuevo Video</Link>
          </div>
    </nav>
  );
};

export default Nav;
