import { InputSearch } from '@/components/input-search'
import { Logo } from '@/components/logo'
import { CardWeatherToday } from './components/card-weather-today'
import { CardWeatherDetail } from './components/card-weather-detail'

export default function weather() {
  return (
    <div className=" relative grid grid-row-2 lg:grid-rows lg:grid-cols-2 p-6 gap-4 h-screen">
      <div className="flex flex-col bg-gray-800  space-y-4 rounded-xl h-full p-4">
        <div className="flex gap-3">
          <div className="bg-gray-600 rounded-lg w-14 h-14 flex items-center justify-center">
            <Logo />
          </div>

          <InputSearch />
        </div>

        <CardWeatherToday />
      </div>
      <div className="h-full flex flex-col gap-4">
        <CardWeatherDetail />
        <div className="bg-gray-800 h-2/5 w-full rounded-xl">h2</div>
      </div>
    </div>
  )
}
