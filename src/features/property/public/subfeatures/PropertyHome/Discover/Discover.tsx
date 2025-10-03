
import { CarrouselOrquest } from './components';
import { PropertyPublic } from '@/src/features/property/public/services';
import Link from 'next/link'

export async function Discover() {
  const [SALE, RENT] = await Promise.all([
    PropertyPublic.carrousel('SALE'),
    PropertyPublic.carrousel('RENT')
  ])

  if (!SALE || !RENT) return null

  return (
    <section className='flex flex-col md:flex-row space-y-10 justify-between w-full h-full mt-12 overflow-hidden'>
      <div className=' flex-1 flex flex-col justify-center items-start p-2 md:p-12 space-y-4 w-full xs:min-w-[50%]'>
        <h2 className='text-2xl sm:text-4xl font-bold font-poppins'>¿Conoces nuestras categorias de propiedades?</h2>
        <p>Puedes intercalar entre las propiedades de venta y de alquiler</p>
        <Link
          href={'/es/buscar/venta-de-departamentos-o-casas?page=1'}
          target='_blank'
          aria-label='Encontrar mi propiedad'
          className="border border-green-900 text-center bg-green-50 font-bold text-zinc-800 w-full lg:w-1/2 py-3 rounded-2xl flex justify-center items-center hover:bg-[#d9fbc6] active:scale-95 transition-transform duration-150 ease-in-out transition-colors"
        >
          Encontrar mi propiedad
        </Link>
      </div>
        <CarrouselOrquest SALE={SALE} RENT={RENT} />
    </section>
  )
}
