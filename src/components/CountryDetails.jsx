import '../sass/styles.css';
import { useParams, useNavigate } from 'react-router-dom';
import useBackButton from '../hooks/useBackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const CountryDetails = ( { data, theme, mapCountryCodeToName } ) => {
  
  const { countryName } = useParams(); // This relates to the route in App.jsx
  const country = data.filter((item) => item.name.common === countryName)[0];
  const goBack = useBackButton();  
  const navigate = useNavigate();
  
  return (
 
    <div className={`detail ${theme}`} >
      <nav className={`detail__button ${theme}`} onClick={goBack}>
        <div><FontAwesomeIcon icon={faArrowLeft} /></div>
        <button>Back</button>
      </nav>
      <div className={`detail__wrapper ${theme}`}>
        <>
        {/* // Flag */}
        <div className="detail__flag-wrapper" >
        <img className='detail__flag' src={country?.flags?.svg} alt={country?.flags?.alt}/>
        </div>

        {/* // Data Wrapper 1 */}
        <div className="detail__data-wrapper-1">
          <div className="detail__country-name">{country?.name?.common} </div>
          <div>{country?.name?.nativeName &&
            <>
            <span className='detail__info--bold'>Native Name: </span>
            {Object.values(country.name.nativeName).map(({official}) => official).join(', ')}
            </>
          }</div>
          <div>{country?.population &&
          <>
            <span className='detail__info--bold'>Population: </span>{country.population.toLocaleString()}
          </>
          }</div>
          <div>{country?.region &&
          <>
            <span className='detail__info--bold'>Region: </span>{country.region}
          </>
          }</div>
          <div>{country?.subregion &&
          <>
            <span className='detail__info--bold'>Subregion: </span>{country.subregion}
          </>
          }</div>
          <div>{country?.capital &&
          <>
            <span className='detail__info--bold'>Capital: </span>{Object.values(country.capital).join(', ')}
          </>
          }</div>
        </div>

        {/* // Data Wrapper 2 */}
        <div className='detail__data-wrapper-2'>
          <div>{country?.tld &&
          <>
            <span className='detail__info--bold'>Top Level Domain: </span>{Object.values(country.tld).join(', ')}
        </>}
          </div>
          <div>{country?.currencies &&
          <>
            <span className='detail__info--bold'>Currencies: </span>{Object.values(country.currencies).map(({name}) => name).join(', ')}
          </>}
          </div>
          <div>{country?.languages &&
          <>
            <span className='detail__info--bold'>Languages: </span>{Object.values(country.languages).join(', ')}</>}
          </div>
        </div>
        
        {/* // Border countries */}
        {country?.borders && (
        <ul className='detail__border-wrapper'>
          <span className='detail__border-title'>Border Countries: </span>
          <span className='detail__border-countries'>
            {country.borders.map((countryCode, index) => (
              <li className={`detail__border-name ${theme}`} key={index} >
                <button onClick={() => navigate(`/${mapCountryCodeToName(countryCode)}`)}>
                  {mapCountryCodeToName(countryCode)}
                </button>
              </li>
            ))}
          </span>
        </ul>)}
        </>
      </div>
    </div>
  )
};

export default CountryDetails

/* NOTE 
Page refresh threw an error. This was solved by the ? optional chaining operator
It first checks if the data is loaded and evaluates to 'undefined' when not.
*/