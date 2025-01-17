import { useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";

const Header = () => {

  const location = useLocation();
  const isNewVideoPage = location.pathname === '/nuevo-video';
  const headerClass = isNewVideoPage ? 'header header__no-image' : 'header';

  return (
    <header className={headerClass}>
        <Nav isNewVideoPage={isNewVideoPage} />
        {!isNewVideoPage && (  
          <div className="header__flex container">
            <div className="header__info">
              <h1 className="header__heading">Front End</h1>
              <h3 className="header__title">Challenge React</h3>
              <p className="header__text">Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <img className="header__img-player" src="/img/player.png" alt="Imagen persona" />
          </div>
        )}
    </header>
  ); 
};

export default Header;
