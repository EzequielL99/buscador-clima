import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner';
import Alert from './components/Alert/Alert';
import WeatherDetail from './components/WeatherDetail/WeatherDetail';
import useWeather from './hooks/useWeather'
import styles from './App.module.css'

function App() {

  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />

        {loading && <Spinner />}

        {hasWeatherData && <WeatherDetail weather={weather} />}

        {notFound && <Alert>Ciudad No Encontrada</Alert>}
      </div>
    </>
  )
}

export default App
