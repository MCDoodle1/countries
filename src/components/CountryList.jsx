import '../sass/styles.css';
import { Link } from 'react-router-dom';


const CountryList = ({ data, theme }) => {
    return (
      <ul className='country-list'>
        {data
          .sort((a, b) => ('' + a.name.common).localeCompare(b.name.common))
          .map((item, index) => (
            <li className={`country-list__item ${theme}`} key={index}>
            
                <Link to={`/${item.name.common}`}>
                  <img className='country-list__flag' src={item.flags.svg} alt={item.name.common}/>
                </Link>
             
              
              <div className="country-list__data">
                <div className="country-list__name">{item.name.common}</div>
                <div className="country-list__population">
                    {(item.population || item.population === '0') && (
                      <span>
                        <span className='country-list__data--bold'>Population: </span>
                        {item.population.toLocaleString()}
                      </span>
                    )}
                </div>
                  <div className="country-list__region">
                    {item.region && (
                      <span>
                        <span className='country-list__data--bold'>Region: </span>
                        {item.region}
                      </span>
                    )}
                  </div>
                  <div className="country-list__capital">
                    {item.capital && (
                      <span>
                        <span className='country-list__data--bold'>Capital: </span>
                        {Object.values(item.capital).join(', ')}
                      </span>
                    )}
                  </div>
                </div>
            </li>
          ))}
      </ul>
    );
  };
  
  export default CountryList;
  
  
