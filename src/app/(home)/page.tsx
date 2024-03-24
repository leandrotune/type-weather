import { InputSearch } from '@/components/input-search'
import { Logo } from '@/components/logo'

export default function Home() {
  return (
    <div className="h-screen flex items-center flex-col bg-[url('/background.svg')] bg-cover bg-center">
      <div className="flex items-center mt-12">
        <Logo />
        <strong>TypeWeather</strong>
      </div>

      <div className="flex flex-col gap-2 items-center mt-40 w-full max-w-[33.5rem] px-8">
        <h1 className="font-bold text-xl md:text-[2rem] leading-[44.8px]">
          Boas vindas ao <span className="text-blue-light">TypeWeather</span>
        </h1>
        <span className="text-sm md:text-xl text-gray-200">
          Escolha um local para ver a previsão do tempo
        </span>

        <div className="mt-14 w-full max-w-[31.5rem] flex">
          <InputSearch />
        </div>
      </div>
    </div>
  )
}
