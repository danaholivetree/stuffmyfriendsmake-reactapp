import React from 'react'

const FeedItem = ({item, addToCart}) => {

  const handleAddToCart = (e) => {
    e.preventDefault()
    console.log('item to be added to cart ', item);
    addToCart(item)
  }

  return (

    <div className="card">
      <img className="card-img-top" src={item.image} alt='image' />
      <div className="card-block">
        <h4 className="card-title">{item.itemName}</h4>
        <h6 className="card-subtitle mb-2 text-muted">Seller: {item.sellerName}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Price: {item.price} </h6>
          <h6 className="card-subtitle mb-2 text-muted">Quantity Available: {item.quantity} </h6>
        <p className="card-text">{item.description}</p>
        <a href="#" className="btn btn-primary">link</a>
        <input className='btn btn-primary' type='button' value='add to cart' onClick={handleAddToCart} />
      </div>
    </div>
  )
}
export default FeedItem