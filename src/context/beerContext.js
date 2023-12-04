import { createContext, useContext } from "react";

// const initialState = {

//     searchParameter: ''
// }

const beerContext = createContext({
    beers: [
        {}
    ],
    searchParameter: '',
    filterBeers: (filter) => { },
    deleteFilter: () => { }
})

export const useBeer = () => useContext(beerContext)
export const BeerContextProvider = beerContext.Provider