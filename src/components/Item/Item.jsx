import {Link} from "react-router-dom"

const Item = ({products})=>{
    return (
        <div className='col-4 p-2 mt-5'> 
            <div key={products.id} className='card w-100 text-center shadow'>
                <div className='card-head'>
                    {products.name}
                </div>
                <div className='card-body'>
                    <img src={products.thumbnail} className='w-100'/>
                    <h6> Tipo: {products.type}</h6>
                    <h6> Precio: {products.price}</h6>
                </div>
                <div className='card-footer'>
                    <Link to={`/detail/${products.id}`}>
                        <button className='btn btn-outline-dark w-100'>Ir a detalle</button>
                    </Link>
                </div>
            </div>
        </div> 
    ) 
}
export default Item