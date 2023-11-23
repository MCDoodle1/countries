import '../sass/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ( {toggleTheme, theme } ) => {
  
  return (
    <div className={`header ${theme}`}>
      <h1>Where in the world?</h1>
      <button className='header__button' onClick={toggleTheme}><FontAwesomeIcon icon={faMoon} />Dark Mode</button>
    </div> 
  )
};

export default Header
