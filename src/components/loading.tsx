export function Loader() {
  return (
    <>
      <span className="sr-only">Loading...</span>
      <div className="flex items-center gap-2">
        <div className="size-3 animate-bounce rounded-full bg-white [animation-delay:-0.3s]"></div>
        <div className="size-3 animate-bounce rounded-full bg-white [animation-delay:-0.15s]"></div>
        <div className="size-3 animate-bounce rounded-full bg-white"></div>
      </div>
    </>
  )
}
