import { FC } from 'react'
import NextLink from 'next/link'

const Navbar: FC = () => {
  return (
    <nav className='bg-transparent border-gray-200 px-2 sm:px-4 py-5 rounded'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <div>
          <NextLink
            href='/'
            className='self-center text-xl font-semibold whitespace-nowrap'
          >
            Arkews
          </NextLink>
        </div>

        <div></div>

        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
