import { createContext } from 'react';
import { TSearchArtistContext } from './type';

const iSearchingArtistContextState = {
  filteredData: [],
  setFilteredData: () => {},
  resultsCount: 0,
  setResultsCount: () => {},
  filter: {},
  setFilter: () => {},
}

const SearchArtistContext = createContext<TSearchArtistContext>(iSearchingArtistContextState);

export default SearchArtistContext;