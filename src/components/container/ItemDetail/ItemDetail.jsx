import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({products})=>{
    return(
        <div>
            <div style={{ width: '40rem' }}>
                <Card className="text-center">
                    <Card.Header>{products.category}</Card.Header>
                    <Card.Img variant="top" style={{ width: '18rem' }} src={products.thumbnail} />
                    <Card.Body>
                        <Card.Title>{products.brand} - {products.name}</Card.Title>
                        <Card.Text>{products.description}</Card.Text>
                        <Button variant="dark">Comprar</Button>
                    </Card.Body>     
                    <Card.Footer className="text-muted">${products.price}</Card.Footer>            
                </Card>
            </div>
        </div>
    )
}
export default ItemDetail