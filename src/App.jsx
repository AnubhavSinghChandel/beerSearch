import { useEffect } from 'react'
import { useState } from 'react'
import Search from './components/Search'
import { BeerContextProvider } from './context/beerContext'
import CardTwo from './components/CardTwo'

function App() {

  const [beers, setBeers] = useState([])
  const [searchParameter, setSearchParameter] = useState('')

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((beerData) => {
        if (searchParameter) {
          setBeers(beerData.filter((beer) => beer.name.toLowerCase().includes(searchParameter)))
        } else {
          setBeers(beerData)
        }
      })
  }, [searchParameter])

  // console.log(beers);


  const filterBeers = (filter) => {
    setSearchParameter(filter)
  }

  const deleteFilter = () => {
    setSearchParameter('')
  }

  // console.log(searchParameter);

  return (
    <BeerContextProvider value={{ beers, searchParameter, filterBeers, deleteFilter }}>
      <main className='flex flex-col justify-center items-center'>
        <Search />
        {
          beers &&
          <div className='grid w-full sm:grid-cols-1 lg:grid-cols-2'>
            {beers.map((beer) =>
              <div key={beer.id} className='py-10 flex justify-center'>
                <CardTwo beer={beer} />
              </div>

            )}
          </div>
        }
      </main>
    </BeerContextProvider>
  )
}

export default App
