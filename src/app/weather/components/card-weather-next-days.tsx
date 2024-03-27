import { WeatherOfTheDay } from './weather-of-the-day'

export function CardWeatherNextDays() {
  return (
    <div className="bg-gray-800 h-2/5 w-full rounded-xl pt-7 px-6 pb-6">
      <h2 className="text-gray-400">Previsão para 5 dias</h2>

      <ul className="mt-5 flex items-center justify-center">
        <WeatherOfTheDay
          day="Amanhã"
          imageIcon="clouds-night"
          climate="Temporal"
          Minimum={16}
          maximum={26}
        />
        <WeatherOfTheDay
          day="terça"
          imageIcon="clouds-night"
          climate="Chuva"
          Minimum={16}
          maximum={26}
        />
        <WeatherOfTheDay
          day="terça"
          imageIcon="clouds-night"
          climate="Poucas nuvens"
          Minimum={16}
          maximum={26}
        />
        <WeatherOfTheDay
          day="terça"
          imageIcon="clouds-night"
          climate="Nublado"
          Minimum={16}
          maximum={26}
        />
        <WeatherOfTheDay
          day="terça"
          imageIcon="clouds-night"
          climate="Céu limpo"
          Minimum={16}
          maximum={26}
        />
      </ul>
    </div>
  )
}
