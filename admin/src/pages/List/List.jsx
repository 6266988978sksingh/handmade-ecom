import React, { useEffect, useState } from 'react'
import './list.css'
import axios from "axios"
import {toast} from "react-toastify"


const List = ({url}) => {

  

  const [list,setList]=useState([])


  const fetchList= async ()=>{
    const response=await axios.get(`${url}/api/product/list`)
     
      if(response.data.success){
        setList(response.data.data)
      }
      else{
        toast.error("error")
      }
    
  }

  const removeProduct= async(productId)=>{
    console.log(productId);
    const response=await axios.post(`${url}/api/product/remove`,{id:productId})
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("error")
    }
  }
  useEffect(()=>{
    fetchList();

  },[])


  return (
    <div  className='flex-col flex-col2'>
      <p>All producs list</p>
      <div className="list-table">
        <div className="list-table-formate title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-formate'>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeProduct(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default List
