import { AuroraText } from '@/components/ui/aurora-text'

export function Hero() {
  return (
    <section className='max-w-5xl w-full mx-auto px-4 text-center space-y-2 pb-32'>
      <h1 className='text-5xl font-bold text-balance'>
        Theme Creator for <AuroraText>Shadcn</AuroraText>{' '}
      </h1>
      <p className='text-lg text-muted-foreground'>
        Create, customize, and export themes for shadcn with support for
        Tailwind 3 and 4.
      </p>
    </section>
  )
}
