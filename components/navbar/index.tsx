import { FC } from 'react'

const Navbar: FC = () => {
  return (
    <nav className='bg-transparent border-gray-200 px-2 sm:px-4 py-3 rounded'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <div>
          <span className='self-center text-xl font-semibold whitespace-nowrap'>
            Arkews
          </span>
        </div>

        <div></div>

        <div>
          <button className='py-2 px-3 text-sm font-medium text-center inline-flex text-white bg-blue-700 rounded-lg hover:bg-blue-800 border border-transparent shadow-lg shadow-blue-800/80 focus:outline-none focus:ring-0'>
            <span>Contáctanos</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
