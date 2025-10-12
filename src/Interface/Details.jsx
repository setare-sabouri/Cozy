import { useStore } from '../Store/useStore'
import styles from './Interface.module.scss'

const Details = () => {
    const { WeatherData, CityName } = useStore()
    console.log(WeatherData)
    const  localTime= new Date((WeatherData?.dt + WeatherData?.timezone)*1000)

    return (
        <>
            {WeatherData &&
                <div className={styles.DetailsContainer}>
                    <div className={styles.CityWeather}>
                        <h1>
                            {WeatherData && CityName
                                ? `${WeatherData.weather[0].main} in ${CityName}`
                                : 'Search a city'}
                        </h1>
                    </div>
                    <div className={styles.weatherDetails}>
                        <p>
                            `$ coutry is {WeatherData.sys.country}`
                        </p>
                        <p>
                            {`${Math.round(WeatherData.main.temp - 273.15)} °`}
                        </p>
                        <p>
                            {` Highest ${Math.round(WeatherData.main.temp_max - 273.15)} ° Lowest ${Math.round(WeatherData.main.temp_min - 273.15)} °`}
                        </p>
                        <p>
                            {`Feels like ${Math.round(WeatherData.main.feels_like - 273.15)} °`}
                        </p>
                        <p>
                            {`Humidity ${WeatherData.main.humidity} %`}
                        </p>
                        <p>
                            {`Time ${localTime.toLocaleString("en-SE", { timeZone: "UTC" })} `}
                        </p>
                    </div>
                </div>
            }
        </>
    )
}

export default Details
