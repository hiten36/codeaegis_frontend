import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CompanyDetail from './CompanyDetail';
import Navbar from './Components/Navbar';
import MainState from './context/MainState';

const App = () => {
  const [refreshFlag, setRefreshFlag] = useState(false);

  return (
    <>
      <MainState>
        <BrowserRouter>
          <Navbar setRefreshFlag={setRefreshFlag} refreshFlag={refreshFlag} />

          <Routes>
            <Route path="/" element={<Home setRefreshFlag={setRefreshFlag} refreshFlag={refreshFlag} />} />
            <Route path="/details/:id" element={<CompanyDetail />} />
          </Routes>
        </BrowserRouter>
      </MainState>
    </>
  );
};

export default App;
