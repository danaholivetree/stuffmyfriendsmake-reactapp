import React from 'react'
import { Row, Col } from 'react-bootstrap'
const FeedItem = ({item, selector, onAddToCart, onAddBookmark, path}) => {

  var quantity = 1

  const handleAdd = (e) => {
    onAddToCart(quantity)
  }

  const changeQuantity = (e) => {
    quantity = e.target.value
  }

  return (
    <div className='container'>

          <div>
            <h4> {item.itemName}</h4>
          </div>
          <div>
            <img className="card-img-top" src={item.image} width='200px' alt='' />
          </div>
          <div>
            For sale by: {item.sellerName}
          </div>

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

export default FeedItem
