import React from 'react'
import { Row, Col, Button, ButtonToolbar} from 'react-bootstrap'
const ItemDetails = ({item, selector, onAddToCart, onAddBookmark, path}) => {

  // var quantity = 1
  //
  const handleAdd = (e) => {
    onAddToCart(1)
  }
  //
  // const changeQuantity = (e) => {
  //   quantity = e.target.value
  // }

  return (
    <div className='container'>
      <Row>
        <Col md={6} sm={12}>
          <img className="card-img-top" src={item.image} width='400px' alt='' />
        </Col>
        <Col md={6} sm={12}>
          <h2 style={{marginTop:0, marginBottom: '25px'}}> {item.itemName} </h2>
          <ButtonToolbar>
            { path !== 'shoppingcart' && <Button  onClick={handleAdd}>Add To Cart</Button>  }
            { path !== 'bookmarks' && <Button onClick={onAddBookmark}>Add To Bookmarks</Button>  }
          </ButtonToolbar>

          <h5> Category: {item.category} </h5>
          <h5> For sale by: {item.sellerName}</h5>
          <h5> Quantity Available: {item.quantity} </h5>
          <h5> ${item.price} </h5>
          <p>{item.description}</p>
        </Col>
      </Row>




    </div>
  )
}


//     {selector && item.quantity > 1 ?
//      <select name='quantitySelector' defaultValue={item.cartQuantity} onChange={changeQuantity}>
//      {selector}
// //     </select>
//     : '' }
//   { path !== 'shoppingcart' ? <input className='btn btn-primary' type='button' value='add to cart' onClick={handleAdd} /> : '' }
//   { path !== 'bookmarks' ? <input className='btn btn-primary' type='button' value='bookmark' onClick={onAddBookmark} /> : '' } */}

export default ItemDetails
