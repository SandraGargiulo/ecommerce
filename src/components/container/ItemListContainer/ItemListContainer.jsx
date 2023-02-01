import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../../utils/gFetch'
//import './ItemListContainer.css'

import SyncLoader from "react-spinners/SyncLoader"

export const ItemListConteiner = ({ greeting }) => {
  const [products, setProducts] = useState ([])
  const [loading, setLoading] = useState(true)
  const { typeId } = useParams()

  useEffect(()=>{
    if(typeId){
      gFetch()
        .then(respuestaPromesa => {
          setProducts(respuestaPromesa.filter(items => items.type === typeId))
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }else{
      gFetch()
        .then(respuestaPromesa => {
          setProducts(respuestaPromesa)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  },[categoryId])

  return (
    <>
      {greeting ? (
        <h1 className="loading">
          <SyncLoader color="#E569FB" greeting={greeting} size={50} />
        </h1>
      ) : (
        <div className="itemListContainer">
          <div className="type">
              {products.map((product) => (
              <NavLink
                key={product.id}
                to={`/products/${products.type}`}
                className="nav-link"
              >
                  {product.type}
              </NavLink>
            ))}
          </div>

          <ItemList products={products} />
        </div>
      )}
    </>
  )
}

