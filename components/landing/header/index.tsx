import { FC } from 'react'

const HeaderSection: FC = () => {
  return (
    <header className='isolate'>
      <div className='mx-auto max-w-screen-xl lg:py-16 lg:px-12'>
        <div>
          <h1 className='text-4xl font-bold tracking-tight sm:text-center sm:text-7xl text-gray-900 dark:text-white'>
            Desarrollo ágil en la{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600'>
              {' '}
              nube
            </span>
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-400 sm:text-center'>
            Somos una empresa de desarrollo de software enfocada en la creación
            de software de calidad, escalable y seguro.
          </p>

          <div className='mt-8 flex gap-x-4 sm:justify-center'>
            <button className='text-base inline-flex px-6 py-3.5 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 border border-transparent shadow-lg shadow-blue-800/80 focus:outline-none focus:ring-0'>
              Contáctanos
              <span className='text-white ml-2' aria-hidden='true'>
                &rarr;
              </span>
            </button>

            <button className='text-base inline-flex px-6 py-3.5 font-medium text-center text-gray-100 rounded-lg border border-transparent hover:text-gray-200 focus:outline-none focus:ring-0'>
              Conoce más
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderSection
