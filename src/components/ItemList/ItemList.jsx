import Item from "../Item/Item"

const ItemList =({products})=>{
    return(
        <div className="products">
            {
                products.map(product=> <Item key={product.key} {...product}/>)
            }
        </div>
    )
}
export default ItemList