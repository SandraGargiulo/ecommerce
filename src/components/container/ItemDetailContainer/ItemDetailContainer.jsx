import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {gFetch} from "../../../utils/gFetch";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()

    const { getProductById } = useProducts()


    useEffect(() => {
        gFetch(productId)
            .then(resp => setProducts(resp))
    }, [productId])

    console.log(products)

    return(
        <ItemDetail products={products}/>
    )
}

export default ItemDetailContainer