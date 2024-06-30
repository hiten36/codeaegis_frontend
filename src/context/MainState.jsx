import React from 'react'
import MainContext from './MainContext';

// export const baseUrl='http://localhost:5001';
export const baseUrl='https://codeaegis-backend.onrender.com';

const MainState = (props) => {
    const getCompanies=async(id)=>{
        let resp=await fetch(`${baseUrl}/company/getCompanies?id=${id}`);
        let data=await resp.json();
        return data;
    };
    
    const postCompany=async({url})=>{
        let resp=await fetch(`${baseUrl}/company/postCompany`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({url})
        });
        let data=await resp.json();
        return data;
    };
    
    const deleteCompany=async({ids})=>{
        let resp=await fetch(`${baseUrl}/company/deleteCompany`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ids})
        });
        let data=await resp.json();
        return data;
    };

    return (
        <>
            <MainContext.Provider value={{getCompanies, postCompany, deleteCompany}}>
                {props.children}
            </MainContext.Provider>
        </>
    );
};

export default MainState
