import '../sass/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Searchbar = ({ countryFilter, handleCountryChange, theme }) => {

  return (
    <div className={`search-bar ${theme}`}>
      <FontAwesomeIcon icon={faSearch} />
      <input
        id="searchInput"
        type="text"
        value={countryFilter}
        onChange={handleCountryChange}
        placeholder={'Search for a country...'}
      />
    </div>
  )
};

export default Searchbar