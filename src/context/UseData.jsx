import React, { createContext, useState } from 'react'

export const UseClima = createContext();

const UseData = ({children}) => {
  
    const [datas,SetDatas] = useState({});

    return (
    <UseClima.Provider value={{datas,SetDatas}} >
      {children}
    </UseClima.Provider>
  )
}

export default UseData