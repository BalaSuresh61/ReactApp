import './Weather.css'
import searchIcon from '../assets/search.png'
import sun from '../assets/sun.png'
import humidityIcon from '../assets/humidity.png'
import cloud from '../assets/cloud.png'
import rain from '../assets/rain.png'
import snow from '../assets/snow.png'
import windIcon from '../assets/wind.png'
import { useEffect, useState } from 'react'

const WeatherDetails = ({ weather, temp, city, country, lat, long, wind, humidity, loading, error, errorMessage }) => {
    return (
        <>
            <div className='image'>
                <img src={weather} alt="Image" />
            </div>
            <div className='temp'>{temp}°C </div>
            <div className="city">{city}</div>
            <div className="country">{country}</div>
            <div className="cord">
                <div>
                    <p className='lat'>Latitude </p>
                    <span>{lat}</span>
                </div>
                <div>
                    <p className="long">Longitude </p>
                    <span>{long}</span>
                </div>
            </div>
            <div className='speed-container'>
                <div className="wind">
                    <img src={windIcon} alt="Wind" />
                    <div>
                        <span>{wind} Km/s</span><br />
                        <span>Wind Speed</span>
                    </div>
                </div>
                <div className="humidity">
                    <img src={humidityIcon} alt="humidity" />
                    <div>
                        <span>{humidity} %</span><br />
                        <span>Humidity</span>
                    </div>
                </div>
            </div>
            {loading && <div className="loading">loading...</div>}

            <div className="copywrite">
                <span>Designed By <b>Bala</b></span>
            </div>

        </>
    );

}
const Weather = () => {
    const appId = '3113c275a80b93639a3a6f3973a657ee'
    const [text, setText] = useState('chennai')
    const [weather, setWeather] = useState(snow);
    const [temp, setTemp] = useState(0)
    const [city, setCity] = useState('Chennai')
    const [country, setCountry] = useState('IN')
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    const [wind, setWind] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [cityNotFount, setCityNotFount] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [loading, setLoading] = useState(false)

    const weatherIconMap = {
        "01d": sun,
        "01n": sun,
        "02d": cloud,
        "03n": cloud,
        "03d": cloud,
        "04d": cloud,
        "04n": cloud,
        "09d": rain,
        "09n": rain,
        "10d": rain,
        "10n": rain,
        "11d": rain,
        "11n": rain,
        "13d": snow,
        "13n": snow,
    }


    useEffect(() => {
        search()
    }, [])
    const search = async () => {
        setLoading(true)
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${appId}
&units=Metric`;
        console.log("text", text)
        try {
            const res = await fetch(url)
            const data = await res.json();
            if (data.cod === '404') {
                console.error(data.message)
                setLoading(false)
                setCityNotFount(true)
                return;
            }
            let currentWeather = weatherIconMap[data.weather[0].icon]
            // console.log(data)
            setWeather(currentWeather || sun)
            // console.log(currentWeather)
            setTemp(data.main.temp)
            setCity(data.name)
            setCountry(data.sys.country)
            setLat(data.coord.lat)
            setLong(data.coord.lon)
            setWind(data.wind.speed)
            setHumidity(data.main.humidity)
        } catch (err) {
            console.log("error Accoured: ", err)
            setLoading(false)
            setError(true)
            setErrorMessage(err.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="weather">
            <div className='weather-container'>
                <div className="input-container">
                    <input type="text" className='input-field' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e)=>{if(e.key==='Enter'){search()}}}/>
                    <div className="search">
                        <img src={searchIcon} className='search-icon' alt="Search" onClick={search} />
                    </div>
                </div>
                {!loading && !cityNotFount && <WeatherDetails weather={weather} temp={temp} city={city} country={country} lat={lat} long={long} wind={wind} humidity={humidity} loading={loading} error={error} errorMessage={errorMessage} />}
                {error && <div className="error-message">{errorMessage}</div>}
                {cityNotFount && <div className='city-not-found'>City Not Fount</div>}
            </div>
        </div>
    )
}

export default Weather