import Image from 'next/image'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import Filter from '@/components/Filter'
import CarCard from '@/components/CarCard'
import { fetchCars } from '@/utils'


export default async function Home() {
  const allCars = await fetchCars();

  const apiIsEmpty = !Array.isArray(allCars)|| allCars.length < 1 || !allCars
  console.log(allCars)

  
  return (
    <main className=" overflow-hidden">
      <Hero/>
      <section className=' mt-40 sm:mt-20 mx-10'>
        <div>
          <h3 className='text-3xl font-bold'>Car Catalogue</h3>
          <p className='text-sm text-gray-500 mb-10'>Explore out cars you might like</p>
        </div>
        <div className='flex justify-between'>
          <SearchBar/>
          <div className='flex gap-5'>
            <Filter text="fuel"/>
            <Filter text="year"/>
          </div>
        </div>
         {!apiIsEmpty ?(
          <section>
            <div>
              {allCars.map((car)=> <CarCard key={car} car={car}/>)}
            </div>
          </section>
         ):(
          <div>
            <h3 className='text-black font-bold text-xl'>Oops, no results</h3>
            <p>{allCars.message}</p>
          </div>
         )}
      </section>
    </main>
  )
}
