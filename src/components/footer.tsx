import { Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="container mt-10 flex items-center justify-center gap-5 border-t border-gray-700/10 py-10">
      <button>
        <Linkedin className="text-gray-400 transition-all hover:text-gray-700" />
      </button>
    </footer>
  )
}
