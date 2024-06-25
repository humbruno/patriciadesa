import { LinkedinIcon } from './linkedin-icon'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip'

const FOOTER_ITEMS = [
  {
    title: 'LinkedIn',
    icon: <LinkedinIcon />,
    url: 'https://www.linkedin.com/in/patr%C3%ADciades%C3%A1/'
  }
] as const

export function Footer() {
  return (
    <footer className="container mt-auto flex items-center justify-center gap-5 border-t border-gray-700/10 py-10 opacity-70">
      <TooltipProvider delayDuration={0}>
        {FOOTER_ITEMS.map((v) => (
          <Tooltip key={v.title}>
            <TooltipTrigger className="transition-transform hover:scale-110">
              <a
                target="_blank"
                href={v.url}
                className="flex flex-col items-center gap-2 text-xs"
              >
                {v.icon}
                <span className="block lg:hidden">{v.title}</span>
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{v.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </footer>
  )
}
