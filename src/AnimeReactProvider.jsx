import React, { useState } from 'react';
import AnimeReactContext from './AnimeReactProviderContext';

// eslint-disable-next-line react/prop-types
const AnimeReactProvider = ({ children }) => {
  const [ccontextState, setCcontextState] = useState('not set');

  return (
    <AnimeReactContext.Provider value={{ ccontextState, setCcontextState }}>
      {children}
    </AnimeReactContext.Provider>
  );
};

export default AnimeReactProvider;