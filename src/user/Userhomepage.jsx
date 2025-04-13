import "tailwindcss";
import UserNavbar from '../user/UserNavbar'
import image1 from '../images/men1.png'
import image2 from '../images/woman1.png'
import image3 from '../images/sale1.png'
import { useState , useEffect} from "react";

function Userhomepage() {

  let [slideItem, setSlide] = useState(0)

  let Items = [
    {
      id: 1,
      title: "70% off on men's shopping",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem vitae, ullam odit debitis iure adipisci minima molestias laboriosam libero amet dolor ipsa, tenetur dolorem quia.",
      image: image1
    },
    {
      id: 2,
      title: "70% off on Women's shopping",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem vitae, ullam odit debitis iure adipisci minima molestias laboriosam libero amet dolor ipsa, tenetur dolorem quia.",
      image: image2
    },
    {
      id: 3,
      title: "Sales in all products",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quidem vitae, ullam odit debitis iure adipisci minima molestias laboriosam libero amet dolor ipsa, tenetur dolorem quia.",
      image: image3
    }
  ]

useEffect(() => {
  const interval = setInterval(() => {
    setSlide(prev => (prev === Items.length - 1 ? 0 : prev + 1));
  }, 3000);

  return () => clearInterval(interval); // Clean up interval on unmount
}, [Items.length]);

    return (
      <div className="Userhomepage flex item-center bg-gray-100 relative overflow-hidden" style={{ width: "100%", height: "100vh" }}>

        <div className="h-[700px] w-[700px] bg-[#EB4235] absolute rotate-45 -top-1/3 right-0 rounded-3xl ">
        </div>

        <UserNavbar />
        <div className="hero" style={{
          width: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          zIndex: "1",
          height: "70%",
          marginTop: "10rem",
          marginLeft: "8rem"
          }}>
           <div style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap"
              }}>
              <div className="content w-96">
              <h3 style={{ color: "blue" }}>{Items[slideItem].title}</h3>
              <p>{Items[slideItem].description}</p>
              <button>Order now</button>
               </div>

               <div className="image w-96 ">
              <img src={Items[slideItem].image} alt="image" style={{ objectFit: "cover", marginLeft: "3rem", }} />
              </div>
           </div>

        </div>
       </div>

      
    )
  }

export default Userhomepage;
