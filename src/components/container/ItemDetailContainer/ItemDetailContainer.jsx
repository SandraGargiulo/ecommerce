import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { gFetch } from "../../../utils/gFetch";
import { ItemDetail }  from "../ItemDetail/ItemDetail";

const ItemDetailContainer =()=>{
    const [product, setProduct] = useState({})
    const {detailId} = useParams()

    useEffect(()=>{
        gFetch(detailId)
            .then(resp => setProduct(resp))
    },[])

    console.log(product)

    return(
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer