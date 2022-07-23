import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Loading from './Loading'

const Form = ({setDatas}) => {

    const [input,setInput] = useState({
        cuidad:"",
        pais:""
    }) 

    const [data , setData] = useState({})

    const [loading,setLoading] = useState(false)

    const {cuidad,pais} = input;

    const {current,location} = data;

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!cuidad.trim() || !pais.trim()){
            Swal.fire({
                title: 'Error!',
                text: 'Complete los campos de texto...',
                icon: 'error',
                confirmButtonText: 'OK'
              })
            return console.log("campos vacios")
        }

        api(cuidad,pais) 

    }

    // useEffect(()=>{
       
    // },[data])

    const handleChange = (e)=>{
        const {name,value} = e.target
        console.log(name,value)
        setInput((old)=>({
            ...old, [name] : value
        }))
    }
  
    const api = async (cuidad="",pais="")=>{
        setLoading(true)
        try {
    
            const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=40c0f6e63621401595c171650222007&q=${cuidad},${pais}&lang=es`)
            const data = await res.json();
            setData(data)
            setDatas(data)
            setInput({
                cuidad:"",
                pais:""
            })
        } catch (error) {
            console.log("error")
        }finally{
            setLoading(false)
        }
    }

  return (
    <div className='container w-25 text-center '>
    <form onSubmit={handleSubmit}>
    <input type="text" 
            className='form form-control mb-2'
            name="pais"
            placeholder="ingrese Pais"
            onChange={handleChange}
            value={pais}
        />
        <input type="text"
            className='form form-control mb-2' 
            name="cuidad"
            placeholder="ingrese cuidad"
           value={cuidad}
            onChange={handleChange}
        />
        <button className='btn btn-primary' type='submit'>buscar</button>
    </form>
    {
        loading && <Loading/>
    }
    </div>
  )
}

export default Form