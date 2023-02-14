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
  const [categories, setCategories] = useState([]);

  const { categoryId } = useParams()

  useEffect(() => {
    if (categoryId) {
      gFetch()
        .then(respuestaPromesa => {
          setProducts(respuestaPromesa.filter(items => items.category === categoryId))
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
  }, [categoryId])

  console.log("Productos: ", products)

  return (
    <>
      {loading ? (
        <h1 className="loading">
          <SyncLoader color="#6998AB" loading={loading} size={10} />
        </h1>
      ) : (

        <div className="itemListContainer">
            <div className="category">

            {products.map((product) => (
              <NavLink
                key={product.id}
                to={`/product/${product.category}`}
                className="nav-link"
              >
                {product.category}
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