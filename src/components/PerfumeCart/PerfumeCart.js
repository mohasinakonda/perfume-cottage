import React from "react"
import { BsFillCartPlusFill, BsFillBucketFill } from "react-icons/bs"
import "./PerfumeCart.css"

const PerfumeCart = ({ perfume, handleAddToCart }) => {
	return (
		<div className="product">
			<div className="img-container">
				<img src={perfume.img} alt="" />
			</div>
			<h3>{perfume.name}</h3>
			<p>price:{perfume.price}</p>
			<button
				onClick={() => handleAddToCart(perfume)}
				className="shopping-cart-btn"
			>
				Add to card
				<BsFillCartPlusFill />
			</button>
		</div>
	)
}

export default PerfumeCart
