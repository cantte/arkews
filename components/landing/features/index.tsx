import { FC, ReactNode } from 'react'
import FeatureCard from './card'
import AcademicCapIcon from '../../icons/academic-cap'
import LightIcon from '../../icons/light'
import CloudIcon from '../../icons/cloud'
import ChatBubbleIcon from '../../icons/chat-bubble'
import UserGroupIcon from '../../icons/user-group'
import CodeIcon from '../../icons/code'

interface Feature {
  title: string
  description: string
  icon?: ReactNode
}

type Features = Feature[]

const features: Features = [
  {
    title: 'Experiencia y conocimiento',
    description:
      'Contamos con un equipo altamente capacitado y con amplia experiencia en el desarrollo de aplicaciones utilizando tecnologías de vanguardia.',
    icon: <AcademicCapIcon />
  },
  {
    title: 'Soluciones innovadoras',
    description:
      'Nos apasiona trabajar en proyectos innovadores y estamos constantemente buscando nuevas formas de hacer que nuestros clientes destaquen en el mercado.',
    icon: <LightIcon />
  },
  {
    title: 'Desarrollo en la nube',
    description:
      'Utilizamos plataformas en la nube como AWS y Google Cloud para el alojamiento y despliegue de aplicaciones, lo que nos permite ofrecer soluciones flexibles y escalables a nuestros clientes.',
    icon: <CloudIcon />
  },
  {
    title: 'Comunicación clara',
    description:
      'Nos esforzamos por tener una comunicación clara y transparente con nuestros clientes a lo largo de todo el proceso de desarrollo.',
    icon: <ChatBubbleIcon />
  },
  {
    title: 'Atención personalizada',
    description:
      'Brindamos soluciones de software personalizadas y a medida, asegurándonos de que cumplan con las necesidades y expectativas de nuestros clientes.',
    icon: <UserGroupIcon />
  },
  {
    title: 'Calidad del código',
    description:
      'Priorizamos siempre la calidad del código y la atención al detalle en todos nuestros proyectos.',
    icon: <CodeIcon />
  }
]

const FeaturesSection: FC = () => {
  return (
    <div id='features' className='py-24 sm:py-32 lg:py-40'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='sm:text-center'>
          <h2 className='text-lg font-semibold leading-8 text-green-600'>
            ¿Qué hacemos?
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
            Transformamos ideas en soluciones innovadoras de software
          </p>
          <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400'>
            Nuestro equipo se dedica a transformar las ideas de nuestros
            clientes en soluciones de software innovadoras y de alta calidad.
          </p>
        </div>

        <div className='mt-20 max-w-lg sm:mx-auto md:max-w-none'>
          <div className='grid grid-cols-1 gap-y-7 md:grid-cols-2 md:gap-x-10 md:gap-y-7'>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
