import  { useEffect, useState } from 'react'
import  axios  from 'axios'
export default function Backend() {
    let [a,setA]= useState([]);
useEffect(()=>{
    
    function fetchdata(){
      axios.get('http://localhost:4000/allNotes')
      .then((res)=>{
        console.log(res.data)
        setA(res.data)
      })
    }
    fetchdata()

},[])
  return (
    <div>
        {a.map((i,idx)=>{
            return <h1 key={idx}>{i.title}</h1>
        })}
    </div>
  )
}
