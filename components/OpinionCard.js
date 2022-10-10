
export default function OpinionCard({ opinion }) {

  return (
    <div className="bg-rose-500/60 shadow-xl text-white flex flex-col px-4 py-2 rounded space-y-2 w-fit">
      <p className="text-2xl">{opinion.title}</p>
      <p className="text-md text-rose-100">{opinion.method}</p>
    </div>
  )
}