
export default function PostCard({ post }) {

  return (
    <div className="bg-rose-500/60 shadow-xl text-white flex flex-col px-4 py-2 rounded space-y-2 w-fit">
      <p className="text-2xl">{post.title}</p>
      <p className="text-md text-rose-100">{post.content}</p>
    </div>
  )
}