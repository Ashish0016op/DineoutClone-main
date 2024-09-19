import React, { useRef } from 'react'

const DivProduct = ({e}) => {
let image = useRef(null);
  const hover=()=>{
image.current.style.height="185px";
}

const hoverOver =()=>{
  
  image.current.style.height="170px";
  }

  return (
    <div className='boxDesign-a' onMouseEnter={hover} onMouseLeave={hoverOver}>
        <header>
            <img src={e.image} ref={image} alt="" width={"100%"} height="170px"/>
        </header>
        <footer className='footerBox-a'>
    <h3>{e.name}</h3>
       <div>
        <span>{e.location1} </span>
        <span>{e.location2} </span>
        <span>{e.location3} </span>
       </div>

       <div>
        <span>₹ {e.discription1} for 2 (approx)| </span>
        <span>{e.discription2} | </span>
        <span>{e.discription3} | </span>
        <span>{e.category} </span>
       </div>
        </footer>

<div className='rating-a'>{e.rating}</div>


    </div>
  )
}

export default DivProduct