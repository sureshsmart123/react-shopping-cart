import { FETCH_PRODCUTS } from "../types";

export const fetchProducts=()=>async(dispatch)=>{

   const res=await fetch("api/products");
   const data=await res.json();
   console.log(data);
   dispatch({
       type: FETCH_PRODCUTS,
       payload: data,
   });
}