import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';


const Item = (product) => {
    return (
        
        <div className='col-4 p-2 mt-5'>
            <div key={product.id} >
                <Card border="dark" style={{ width: '18rem' }}>
                    <Card.Header>{product.category}</Card.Header>
                    <Card.Img variant="top" src={product.thumbnail}  />
                    <Card.Body>
                    <Card.Title>{product.brand} - {product.name}</Card.Title>
                    <Card.Text>Precio: ${product.price}</Card.Text>
                    </Card.Body>
                
                <Card.Footer>
                    <Link to={`/detail/${product.id}`}>
                        <button className='btn btn-outline-dark w-100'>Ir a detalle</button>
                    </Link>
                </Card.Footer>
                </Card>
            </div>
        </div>
    )
}
export default Item