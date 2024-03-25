import { ElementType } from 'react'

interface WeatherDetailItemProps {
  icon: ElementType
  title: string
  infoDetail: string
}

export function WeatherDetailItem({
  icon: Icon,
  title,
  infoDetail,
}: WeatherDetailItemProps) {
  return (
    <li className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <Icon className="size-8 text-zinc-400" />
        <p className="text-sm/5 font-bold text-gray-200">{title}</p>
      </div>
      <strong className="font-bold">{infoDetail}</strong>
    </li>
  )
}
