import { FC } from 'react'
import NextLink from 'next/link'

const CTASection: FC = () => {
  return (
    <div className='bg-green-900 bg-opacity-10 rounded sm:border border-green-700 border-opacity-30 border-t border-b sm:rounded-lg'>
      <div className='mx-auto max-w-9xl py-12 px-6 lg:flex gap-y-2 lg:items-center lg:justify-between lg:py-16 lg:px-8'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
          <span className='block text-white'>
            ¿Estás interesado en nuestros servicios de desarrollo de software?
          </span>
          <span className='block text-green-500'>
            ¡No dudes en contactarnos!
          </span>
        </h2>

        <div className='mt-8 lg:flex lg:mt-0 lg:flex-shrink-0'>
          <div className='lg:inline-flex rounded-md shadow'>
            <NextLink
              href='mailto:cantte098@gmail.com?Subject=Estoy%20interesado%20en%20adquirir%20sus%20servicios.'
              className='inline-flex w-full items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 shadow-lg shadow-green-800/80'
            >
              Contáctanos
              <span className='text-white ml-2' aria-hidden='true'>
                &rarr;
              </span>
            </NextLink>
          </div>

          <div className='mt-3 rounded-md shadow lg:ml-3 lg:mt-0 lg:inline-flex'>
            <NextLink
              href='/about'
              className='inline-flex w-full items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-gray-50'
            >
              Leer más
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTASection
