import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../../utils/gFetch'
//import './ItemListContainer.css'

export const ItemListConteiner = ({ greeting }) => {
  const [products, setProducts] = useState ([])
  const [loading, setLoading] = useState(true)
  const {typeId} = useParams()

  useEffect(()=>{
    if(typeId){
      gFetch()
        .then(respuestaPromesa => {
          setProductos(respuestaPromesa.filter(items => items.categoria === typeId))
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }else{
      gFetch()
        .then(respuestaPromesa => {
          setProductos(respuestaPromesa)
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }
  },[categoryId])

  return (
    <>
      <div>
        <h2>{greeting}</h2>
        {
          loading ? <center><h3>Cargando... </h3></center>
          :
          products.map(product => <li key={product.id}>{product.name}</li>)
        }
      </div>
    </>
  )
}