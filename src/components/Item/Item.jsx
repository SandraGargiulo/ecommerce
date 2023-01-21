import {Link} from "react-router-dom"

const Item = ({product})=>{
    return (
        <div className='col-4 p-2 mt-5'> 
            <div key={product.id} className='card w-100 text-center shadow'>
                <div className='card-head'>
                    {product.name}
                </div>
                <div className='card-body'>
                    <img src={product.thumbnail} className='w-100'/>
                    <h6> Tipo: {product.type}</h6>
                    <h6> Precio: {product.price}</h6>
                </div>
                <div className='card-footer'>
                    <Link to={`/detail/${product.id}`}>
                        <button className='btn btn-outline-dark w-100'>Ir a detalle</button>
                    </Link>
                </div>
            </div>
        </div> 
    ) 
}
export default Item