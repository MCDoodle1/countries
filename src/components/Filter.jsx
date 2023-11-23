import '../sass/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ 
  continentFilter, 
  handleOptionClick, 
  isOpen, 
  setIsOpen, 
  theme }) => {

  return (
    <div className={`filter ${theme}`}>
      <div className={`filter__select ${isOpen ? 'active' : ''}`}>
        <div className="filter__select-trigger" onClick={() => setIsOpen(!isOpen)}>
          <span>{continentFilter || 'Filter by Region' }</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <div className={`filter__options ${theme}`}>
          <div onClick={() => handleOptionClick('Africa')} className="filter__option">Africa</div>
          <div onClick={() => handleOptionClick('Americas')} className="filter__option">Americas</div>
          <div onClick={() => handleOptionClick('Asia')} className="filter__option">Asia</div>
          <div onClick={() => handleOptionClick('Europe')} className="filter__option">Europe</div>
          <div onClick={() => handleOptionClick('Oceania')} className="filter__option">Oceania</div>
          <div onClick={() => handleOptionClick('')} className="filter__option">All Countries </div>
        </div>
      </div>
    </div>
  );
};


export default Filter;
