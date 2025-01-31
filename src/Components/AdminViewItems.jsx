// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import '../Style/AdminViewItem.css'
// import axios from "axios";
// import { toast } from "react-toastify";


// const AdminViewItems = () => {
//     let [item, setitem] = useState([]);
//     let [force, setForce] = useState(0);
//     useEffect(() => {
//         let fetchdata = () => {
//             axios.get('https://localhost:1000/products')
//                 .then((res) => {
//                     setitem(res.data)
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                 })
//             }
//             fetchdata();
//         }, [force])
        
//         function deleteProducts(id, name) {
//             axios.delete(`https://localhost:1000/products/${id}`)
//             .then(() => {
//                 toast.success(`${name} deleted`)
//                 setForce(force+1)
//             })
//             .catch(() => {
//                 toast.error('Data not present')
//             })
//     }
    
//     let navigate = useNavigate()
//     function editPage(id) {
//        navigate(`/adminhomepage/updateProduct/${id}`)
//     }

//     return (
//         <div className="viewitems">
//             {item.map((item) => {
//                 return (
//                     <div className="allCards" key={item.id}>
//                         <div className="card1">
//                             <img src={item.image} alt="" />
//                             <div className="thumbnail">
//                                 <h2>{item.name}</h2>
//                                 <div style={{ display: "flex", gap: "10px" }}>
//                                     <h3>{item.rating} <i class="fa-solid fa-star"></i>
//                                     </h3>
//                                     <h5>{item.category}</h5>
//                                 </div>
//                                 <h2><i class="fa-solid fa-indian-rupee-sign"></i> {item.price}</h2>
//                                 <p>{item.desc}</p>

//                                 <div className="btn" style={{ gap: "20px", outlineColor: "none" }}>
                                    

//                                     <button onClick={()=>editPage(item.id)} className="btn btn-primary">
//                                     <i class="fa-solid fa-pen-to-square"></i> Edit
//                                     </button>

//                                     <button className="btn btn-danger" onClick={() => { deleteProducts(item.id, item.name) }}><i class="fa-solid fa-trash-can"></i>Delete</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//     );

// }
// export default AdminViewItems;






import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Style/AdminViewItem.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function AdminViewItems() {

  let [product, setProduct] = useState([])
  let [force, setForce] = useState(0)

  useEffect(() => {
    function fetchdata() {
      axios.get('https://localhost:1000/products')
        .then((res) => {
          console.log(res.data);
          setProduct(res.data)
        })
        .catch((err) => {
          console.log(err);

        })
    }
    fetchdata();
  }, [force])
  console.log(product);

  function deleteProduct(id, name) {
    axios.delete(`https://localhost:1000/products/${id}`)
      .then(() => {
        toast.success(`${name} Deleted succefully`)
        setForce(force + 1)
      })
      .catch(() => {
        toast.error(`Data not present`)
      })
  }

  let navigate = useNavigate()
  function editPage(id) {
    navigate(`/adminhomepage/updateproducts/${id}`)
  }
  return (
    <div className='AdminViewItems'>

      {product.map((product) => {
        return (
          <div className="sub_Item">
            <h1>{product.name}</h1>
            <h3>{product.category}</h3>
            <img src={product.image} alt="" />
            <h1>{product.price}</h1>
            <p>{product.description}</p>
            <button onClick={()=>{editPage(product.id)}} className='update'>Update</button>
            <button onClick={() => { deleteProduct(product.id, product.name) }} className='delete'>Delete</button>
          </div>
        )
      })}


    </div>
  )
}