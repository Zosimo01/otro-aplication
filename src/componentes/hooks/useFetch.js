import { useEffect, useState } from "react"
import { Promise } from "../helpers/Promise";


export const useFetch = (lites) => {
 const [state, setstate] = useState({
     data:[],
     loading:true
 });

useEffect(
    ()=>{
        Promise(lites).then(imgs=>{
            const a=setTimeout(()=> setstate({
                         data:imgs,
                         loading:false
                       }),3000);
            return ()=>clearTimeout(a);
        } 
           
        )

    },[lites]);
return state;
}
