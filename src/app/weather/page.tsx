export default function weather() {
  return (
    <div className="grid grid-row-2 lg:grid-rows lg:grid-cols-2 p-6 gap-4 h-screen">
      <div className="bg-gray-800 rounded-xl h-full">principal</div>
      <div className="h-full flex flex-col gap-4">
        <div className="bg-gray-800 h-3/5 w-full rounded-xl">h1</div>
        <div className="bg-gray-800 h-2/5 w-full rounded-xl">h2</div>
      </div>
    </div>
  )
}
