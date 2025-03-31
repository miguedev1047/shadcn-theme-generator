import { ModeToggle } from '@/components/ui/mode-toggle'
import { TypingAnimation } from '@/components/ui/typing-animation'

export function Header() {
  return (
    <header className='flex items-center justify-between w-full bg-background/50 backdrop-blur-lg h-16 border-b'>
      <div className='flex items-center justify-between gap-4 w-full max-w-5xl mx-auto px-8'>
        <nav>
          <TypingAnimation className='text-3xl font-mono font-bold'>
            ShadGen
          </TypingAnimation>
        </nav>
        <nav>
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
