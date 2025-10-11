import { useStore } from '../Store/useStore'
import styles from './Interface.module.scss'

const Details = () => {
    const { WeatherData, CityName } = useStore()

    return (
        <>
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
                        BBBBBB
                    </p>
                    <p>
                        `$ coutry is {WeatherData?.sys.country}`
                    </p>
                    <p>
                        CCCC
                    </p>

                </div>
            </div>
        </>
    )
}

export default Details
