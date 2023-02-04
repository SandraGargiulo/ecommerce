import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../../utils/gFetch'
import ItemList from '../../ItemList/ItemList'
//import './ItemListContainer.css'

import SyncLoader from "react-spinners/SyncLoader"

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState ([])
  const [loading, setLoading] = useState(true)
  const [types, setTypes] = useState([]);

  const { typeId } = useParams()

  useEffect(() => {
    if (typeId) {
      gFetch()
        .then(respuestaPromesa => {
          setProducts(respuestaPromesa.filter(items => items.type === typeId))
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
      gFetch()
        .then(respuestaPromesa => {
          setProducts(respuestaPromesa)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  }, [typeId])

  console.log("Productos: ", products)

  return (
    <>
      {loading ? (
        <h1 className="loading">
          <SyncLoader color="#6998AB" loading={loading} size={10} />
        </h1>
      ) : (

        <div className="itemListContainer">
          <div className="type">

            {products.map((product) => (
              <NavLink
                key={product.id}
                to={`/products/${product.type}`}
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

export default ItemListContainer