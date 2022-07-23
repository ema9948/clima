import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Form from './components/Form'

const App = () => {

  const [datas,setDatas] = useState(false)
  return (
    <div className='container'>
        <h1>App Clima</h1>
        <Form setDatas={setDatas}/>
        {
          datas && <div className="container">
          <Card data={datas} />
        </div>
        }
      
    </div>
  )
}

export default App