import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import Filter from '@/components/Filter'
import CarCard from '@/components/CarCard'
import { fetchCars } from '@/utils'
import { fuels, yearsOfProduction } from '@/constants'

export default async function Home({searchParams}) {
  const allCars = await fetchCars(
    {manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",}
  );

  const apiIsEmpty = !Array.isArray(allCars)|| allCars.length < 1 || !allCars

  

  return (
    <main className=" overflow-hidden">
      <Hero/>
      <section id='catalogue' className=' mt-40 sm:mt-20 mx-10'>
        <div>
          <h3 className='text-3xl font-bold'>Car Catalogue</h3>
          <p className='text-sm text-gray-500 mb-10'>Explore out cars you might like</p>
        </div>
        <div className='flex flex-col'>
          <SearchBar/>
          <div className='flex gap-5'>
            <Filter text="fuel" options={fuels}/>
            <Filter text="year" options={yearsOfProduction}/>
          </div>
        </div>
         {!apiIsEmpty ?(
          <section>
            <div className='flex flex-wrap'>
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
