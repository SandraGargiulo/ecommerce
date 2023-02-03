import Item from "../Item/Item"

const ItemList =({products})=>{
    return(
        <div className="products">
            {
                products.map(products=> <Item key={products.key} {...products}/>)
            }
        </div>
    )
}
export default ItemList