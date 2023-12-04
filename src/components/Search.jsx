import Input from 'postcss/lib/input'
import React, { useState } from 'react'
import { useBeer } from '../context/beerContext'

function Search() {

    const [searchBeer, setSearchBeer] = useState('')

    let { filterBeers, deleteFilter, searchParameter } = useBeer()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!searchBeer)
            return
        filterBeers(searchBeer)
    }
    // console.log(searchBeer);

    const reset = () => {
        setSearchBeer('')
        deleteFilter()
    }

    return (
        <div className='flex flex-row gap-6'>
            <form onSubmit={handleSubmit} className='my-10 flex flex-row gap-4'>
                <div className="flex w-[300px] flex-auto justify-end">
                    <input
                        className="flex w-full rounded-2xl h-10rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="search"
                        placeholder="Search"
                        value={searchBeer}
                        onChange={(e) => setSearchBeer(e.target.value)}
                    />
                    <div className='mt-1 absolute'>
                        <button className='bg-gray-100 rounded-2xl mr-2'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 -960 960 960"
                                width="24"
                            >
                                <path d="M379-338q-102 0-173-71t-71-173q0-102 71-173t173-71q102 0 173 71t71 173q0 42-13.5 83T572-429l234 234q8 8 8.5 18.5T806-157q-9 9-19 9t-19-9L535-390q-30 25-73.5 38.5T379-338Zm0-54q81 0 135.5-54.5T569-582q0-81-54.5-135.5T379-772q-81 0-135.5 54.5T189-582q0 81 54.5 135.5T379-392Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
            {searchParameter &&
                <button onClick={reset}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                    >
                        <path d="M481-442 272-232q-9 9-19.5 9T232-233q-9-10-8.5-19t9.5-19l208-209-209-211q-8-9-8.5-18.5T232-729q10-10 20-10.5t20 9.5l209 210 207-210q9-9 19.5-9t20.5 10q9 10 8.5 19t-9.5 19L519-480l208 209q8 8 9 18t-8 20q-10 10-20 10.5t-20-9.5L481-442Z" />
                    </svg>

                </button>
            }
        </div>
    )
}

export default Search