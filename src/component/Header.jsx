import { Link } from "react-router-dom";

function Header({ currentPage }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {currentPage === "home" ? (
              <strong>
                <Link to="/">Home</Link>
              </strong>
            ) : (
              <Link to="/">Home</Link>
            )}
          </li>
          <li>
            {currentPage === "celebrities" ? (
              <strong>
                <Link to="/celebrities">Liste des célebrités</Link>
              </strong>
            ) : (
              <Link to="/celebrities">Liste des célebrités</Link>
            )}
          </li>
          <li>
            {currentPage === "random" ? (
              <strong>
                <Link to="/celebrities/random">Célebrité aléatoire</Link>
              </strong>
            ) : (
              <Link to="/celebrities/random">Célebrité aléatoire</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

/**
 * import { Link } from "react-router-dom";
import Footer from "./Footer";


function Header(){
    return(
<>
        <header>
            <img src="" alt="" />
            <h1>Nos belles perles !</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">le top 5</Link></li>
                    <li><Link to="/">choisi ta celebrité</Link></li>
                </ul>
            </nav>
        </header>
        
        </>
    )
}
export default Header;
*/