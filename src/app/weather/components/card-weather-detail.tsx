import { WeatherDetailItem } from './weather-detail-item'

import {
  ThermometerSimple,
  CloudRain,
  Drop,
  Wind,
  SunDim,
} from '@phosphor-icons/react/dist/ssr'

export function CardWeatherDetail() {
  return (
    <div className="bg-gray-800  w-full h-auto rounded-xl px-6 pt-7 pb-2">
      <h2 className="text-gray-400">Detalhes do clima hoje</h2>
      <ul className="mt-5 divide-y divide-gray-700">
        <WeatherDetailItem
          icon={ThermometerSimple}
          title="Sensação térmica"
          infoDetail="26ºc"
        />
        <WeatherDetailItem
          icon={CloudRain}
          title="Probabilidade de chuva"
          infoDetail="0%"
        />
        <WeatherDetailItem
          icon={Wind}
          title="Velocidade do vento"
          infoDetail="8 km/h"
        />
        <WeatherDetailItem
          icon={Drop}
          title="Sensação térmica"
          infoDetail="40%"
        />
        <WeatherDetailItem icon={SunDim} title="Índice UV" infoDetail="5" />
      </ul>
    </div>
  )
}
