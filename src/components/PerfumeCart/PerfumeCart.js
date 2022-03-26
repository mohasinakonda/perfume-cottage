import React from "react"
import { BsFillCartPlusFill } from "react-icons/bs"
import "./PerfumeCart.css"

const PerfumeCart = ({ perfume, handleAddToCart }) => {
	return (
		<div
			className="product col-md-6 col-lg-4  "
			style={{ width: "18rem", margin: "10px" }}
		>
			<div className="img-container">
				<img className="img-fluid w-75" src={perfume.img} alt="" />
			</div>
			<h3>{perfume.name}</h3>
			<p>price:{perfume.price} BDT</p>
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
