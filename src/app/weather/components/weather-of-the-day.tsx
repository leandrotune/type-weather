import Image from 'next/image'

interface WeatherOfTheDayProps {
  day: string
  imageIcon: string
  climate: string
  Minimum: number
  maximum: number
}

export function WeatherOfTheDay({
  day,
  imageIcon,
  climate,
  Minimum,
  maximum,
}: WeatherOfTheDayProps) {
  return (
    <li className="flex flex-1 flex-col items-center md:px-[1.625rem] py-7 gap-3 justify-between px-0">
      <strong className="text-gray-200 text-sm font-bold text-nowrap">
        {day}
      </strong>
      <Image
        src={`icons/${imageIcon}.svg`}
        alt={`image of ${climate}`}
        height={0}
        width={0}
        className="w-14 h-14 sm:w-[4.1875rem] sm:h-[4.1875rem]"
      />
      <div className="flex flex-col gap-1 items-center">
        <p className="text-gray-200 text-sm">{climate}</p>
        <strong className="font-bold">
          {Minimum}ºc <span className="text-gray-400">{maximum}ºc</span>
        </strong>
      </div>
    </li>
  )
}
