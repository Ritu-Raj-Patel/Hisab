export default function Toast({ message }) {
  if (!message) return null

  return (
    <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-xl">
      {message}
    </div>
  )
}
