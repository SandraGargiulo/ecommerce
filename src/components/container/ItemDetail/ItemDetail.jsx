const ItemDetail = ({product})=>{
    return(
        <div classname="conteiner">
            <div classname="row">
                <div classname="col-6">
                    <img src={product.thumbnail} classname='w-25'/>
                    <h4>Tipo: {product.type}</h4>
                    <h4>Fabricante: {product.brand}</h4>
                    <h4>Nombre: {product.name}</h4>
                    <h4>{product.description}</h4>
                    <h4>Precio: {product.price}</h4>
                </div>
            </div>
        </div>
    )
}