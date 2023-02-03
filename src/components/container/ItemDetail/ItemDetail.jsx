const ItemDetail = ({products})=>{
    return(
        <div classname="container">
            <div classname="row">
                <div classname="col-6">
                    <img src={products.thumbnail} classname='w-25'/>
                    <h4>Tipo: {products.type}</h4>
                    <h4>Fabricante: {products.brand}</h4>
                    <h4>Nombre: {products.name}</h4>
                    <h4>{products.description}</h4>
                    <h4>Precio: {products.price}</h4>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail