import React from 'react';
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import Map from './Map';
import './App.css';
import Sidebar from './sidebar';

const queryCache = new QueryCache();

const App = () => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    <div className="App">
      <Sidebar />
      <Map />
    </div>
  </ReactQueryCacheProvider>
);

export default App;
