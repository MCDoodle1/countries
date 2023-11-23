import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import CountryList from './components/CountryList';
import Searchbar from './components/Searchbar';
import Filter from './components/Filter';
import CountryDetails from './components/CountryDetails';
import useFetchData from './hooks/useFetchData';
import './sass/styles.css';


function App() {

  const {initialData, loading, error} = useFetchData('https://restcountries.com/v3.1/all')
  const [filteredData, setFilteredData] = useState([]);
  const [continentFilter, setContinentFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();
  
  
  // Handles inisital data fetching from API
  useEffect(() => {
    if (Object.keys(initialData).length > 0) {
        setFilteredData(initialData)
    }
  }, [initialData]);

  // Filters the data based on continent and country
  useEffect(() => {
    const filtered = initialData.filter(item => {
      return (
        (!continentFilter || item['region'] === continentFilter) &&
        (!countryFilter || diacriticInsensitiveStartsWith(item['name']['common'], countryFilter))
      );
    });
    setFilteredData(filtered);
  }, [continentFilter, countryFilter, initialData]);

  // Manage theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  // Function to perform diacritic-insensitive comparison
  const diacriticInsensitiveStartsWith = (str, substr) => {
    const normalizedStr = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const normalizedSubstr = substr.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return normalizedStr.toLowerCase().startsWith(normalizedSubstr.toLowerCase());
  };

  const handleContinentChange = (selectedContinent) => {
    setContinentFilter(selectedContinent);
  };
  
  const handleCountryChange = (event) => {
    setCountryFilter(event.target.value);
  };

  const handleOptionClick = (value) => {
    handleContinentChange(value);  
    setIsOpen(false);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light')
    }
  };

  // Map 3-digit country codes to country names
  const mapCountryCodeToName = (code) => {
    const country = initialData.find((c) => c.cca3 === code);
    return country?.name.common ?? 'Unknown Country';
  };

  return (
    <div className={`${theme}`}>
      <Header toggleTheme={toggleTheme}
      theme={theme}/>

      <div className="search-filter__wrapper">
        {location.pathname === '/' && <Searchbar
          handleCountryChange={handleCountryChange}
          countryFilter={countryFilter}
          theme={theme}/>}
        {location.pathname === '/' && <Filter
          handleContinentChange={handleContinentChange}
          handleOptionClick={handleOptionClick}
          continentFilter={continentFilter}
          theme={theme}
          isOpen={isOpen}
          setIsOpen={setIsOpen}/>}
      </div>
        
        {loading && <p>Loading...</p>}
        {error && <p>There was an error loading the country names</p>}
        {!loading && !error && (
        <Routes>
            <Route path="/" element={<CountryList 
              data={filteredData} 
              theme={theme}/>} />
            <Route path='/:countryName' element={<CountryDetails 
              data={filteredData} 
              theme={theme} 
              mapCountryCodeToName={mapCountryCodeToName}/>} />
        </Routes>
        )}
    </div>
  );
};

export default App;
