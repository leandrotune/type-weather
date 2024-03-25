import Image from 'next/image'

export function CardWeatherToday() {
  return (
    <div className="relative bg-[url('/backgrounds/background-few-clouds-night.svg')] bg-cover w-full h-full rounded-lg flex flex-col justify-between px-8 pt-8 pb-9">
      <div className="flex justify-between">
        <div className="space-y-2">
          <strong className="block font-bold text-base sm:text-xl/7">
            Porto Alegre, RS
          </strong>
          <span className="text-xs sm:text-base/6">
            Segunda-feira, 15 de maio de 2023
          </span>
        </div>
        <span className="font-bold text-xs sm:text-xl/7">21:39</span>
      </div>

      <div className="space-y-3">
        <strong className="text-5xl sm:text-8xl font-extrabold">28ºc</strong>
        <div className="flex sm:items-center sm:gap-3 flex-col sm:flex-row">
          <p className="text-xl/7 font-bold">32ºc / 26ºc</p>
          <span className="font-normal block">Poucas nuvens</span>
        </div>
      </div>

      <Image
        src={'icons/clear-day.svg'}
        alt="icons weather"
        height={0}
        width={0}
        quality={75}
        className="w-40 h-40 sm:w-[15.5rem] sm:h-[15.5rem] absolute right-0 bottom-0"
      />
    </div>
  )
}
