import { FC } from 'react'
import NextLink from 'next/link'

const FooterSection: FC = () => {
  return (
    <footer className='border-t border-zinc-800 mt-10'>
      <div className='flex flex-col items-center gap-y-4 py-6 md:justify-between lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <nav className='flex flex-wrap justify-center'>
          <div className='py-2 px-5'>
            <NextLink
              href='/about'
              className='text-sm text-zinc-500 hover:text-zinc-400'
            >
              Sobre nosotros
            </NextLink>
          </div>
        </nav>

        <p className='text-center text-xs text-zinc-500'>
          © {new Date().getFullYear()} Arkews. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default FooterSection
