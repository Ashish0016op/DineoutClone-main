import React from 'react'
import  { useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import ProductAction from './StoreContent/ProductAction';
import ProductBox from './Products/ProductBox'
import Sidenav from './Sidenav/Sidenav';
import "./product.css";
import { useToast } from '@chakra-ui/react';

const Product = () => {
  let [state,setState]= useState([]);
  let [page,setPage] = useState({
    no : 1,
    flag : false
  });
  let [limit ,setLimit] = useState(12);


  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(
      <button onClick={() => change(i)} key={i}>
        {i}
      </button>
    );
  }

  const change = (id) => {
    setPage({
      no: id,
      flag :true
    });
  };


  let dispatch = useDispatch();
  useEffect(()=>{
    let res = "Dineout Pay"
    filtercheck(res)
    fetchhh();
  },[page,limit])
  
  
  
  let toast = useToast();
  
   const filtercheck =  (val)=>{
    if(val === "Dineout Pay"){
      fetch(`https://dineoutclone-foc1.onrender.com/products?&_page=${page.no}&_limit=${limit}`)
      .then((res)=>res.json())
      .then((d)=>{
        // console.log(d);
       setState(d);
      })
    }else if( val.target.checked === true && val.target.value==="Cafe" ||val.target.value==="Breakfast" ||val.target.value==="Bakery" ){
        fetch(`https://dineoutclone-foc1.onrender.com/products?tags=${val.target.value}&_page=${page.no}&_limit=${limit}`)
      .then((res)=>res.json())
      .then((d)=>{
       setState(d);
       toast({
        title: `Filtered`,
        position: 'bottom',
        isClosable: true,
      })
      })
     
    }
   else if(val.target.checked){
      fetch(`https://dineoutclone-foc1.onrender.com/products?category=${val.target.value}&_page=${page.no}&_limit=${limit}`)
      .then((res)=>res.json())
      .then((d)=>{
       setState(d);
       toast({
        title: `Filtered`,
        position: 'bottom',
        isClosable: true,
      })
      })
      
    }
   
    // toast({
    //   title: `Filter Success`,
    //   isClosable: true,
    // })
   
   }

  const fetchhh = async()=>{
    await fetch(`https://dineoutclone-foc1.onrender.com/products`)
    .then((res)=>res.json())
    .then((d)=>{
      dispatch(ProductAction({d,setState}));
  })
  }


  return (
    <div className='a-container'>
        <Sidenav state={state} setState={setState} page={page} setPage={setPage} filtercheck={filtercheck}/>
        <ProductBox state={state} setState={setState} arr={arr} page={page} setPage={setPage} setLimit={setLimit}/>
    </div>
  )
}

export default Product;