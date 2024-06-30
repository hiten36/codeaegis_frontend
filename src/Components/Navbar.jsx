import React, { useState } from 'react'
import { useMain } from '../hooks/useMain';
import { useNavigate } from 'react-router-dom';

const Navbar = ({setRefreshFlag, refreshFlag}) => {
  const {postCompany}=useMain();

  const [value, setValue] = useState('');
  const [loadFlag, setLoadFlag] = useState(false);

  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();

    setLoadFlag(true);
    const ans=await postCompany({url: value});
    console.log(ans);
    if(ans.status)
    {
      if(window.location.href.includes('/details'))
      {
        navigate('/');
      }
      setRefreshFlag(!refreshFlag);
      setValue('');
    }
    setLoadFlag(false);
    alert(ans.message);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <form onSubmit={handleSubmit} className="flex md:order-2 nav-form">
            <div className="relative hidden md:block input-nav">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>

                <span className="sr-only">Search icon</span>
              </div>

              <input type="text" id="search-navbar" value={value} onChange={(e)=>setValue(e.target.value)} className="block w-96 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Domain Name" />
            </div>

            <button disabled={loadFlag} type='submit' className="search-btn">{loadFlag ? 'Processing ..' : 'Fetch & Save Details'}</button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
