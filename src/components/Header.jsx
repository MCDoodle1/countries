import '../sass/styles.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ( {toggleTheme, theme } ) => {

  const navigate = useNavigate()
  
  return (
    <div className={`header ${theme}`}>
      <button className='header__title' onClick={() => navigate('/')}>Where in the world?</button>
      <button className='header__button' onClick={toggleTheme}><FontAwesomeIcon icon={faMoon} />Dark Mode</button>
    </div> 
  )
};

export default Header
