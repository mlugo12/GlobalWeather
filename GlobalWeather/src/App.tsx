import { CustomDropdown } from './components/dropdown';


const options = [
  'Metric',
  'Imperial'
];



function App() {

  return (
    <>
      <header>
        <a href="/">
          <img src="/public/logo.svg" width="197" height="40" alt="Global Weather logo" />
        </a>
        
        <CustomDropdown
        label="Units" 
        options={options} 
        onSelect={(option) => console.log(`Selected unit: ${option}`)} 
        />

      </header>
      <main>
        <h1>How's the sky looking today?</h1>
        <div className="searchContainer">
          <input type="text" className="searchBox" id="search" placeholder="Search for a place..." />
          <button type="submit" className="searchButton">Search</button>
        </div>

        <div className="currentWeatherContent">
          <div className="currentWeather">
            <div className="currentWeatherLocation">
              <div className="currentWeatherCity">New York</div>
              <div className="currentWeatherDate">Monday, 12 June 2026</div>
            </div>
            <div className="currentWeatherTemperature">
              <img src="/src/assets/icon-sunny.webp" alt="Sunny" className="currentWeatherIcon" />
              <span className="currentWeatherTemperatureValue">25°</span>
            </div>
          </div>


          <div className="currentWeatherCondition">
            <p>Humidity: 60%</p>
            <p>Wind Speed: 10 km/h</p>
          </div>

        </div>
  



      </main>
      <footer>
        <p>&copy; 2026 Global Weather. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
