import { Link }  from "react-router-dom";

const Nav = ({ isNewVideoPage }) => {
  
  return (
    <div className="background">
      <nav className="nav container">
          <Link to='/'>
            <img src="/logo.png" alt="Logo AluraFlix" />
          </Link>
          <div className="nav__btns">
              <Link className={`nav__btn ${!isNewVideoPage ? 'nav__btn-active' : 'nav__btn-desactive'}`} to="/" >Home</Link>
              <Link className={`nav__btn ${isNewVideoPage ? 'nav__btn-active' : 'nav__btn-desactive'}`} to="/nuevo-video" >Nuevo Video</Link>
          </div>
      </nav>
    </div>
  );
};

export default Nav;
