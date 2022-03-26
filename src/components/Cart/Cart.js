import React from "react"
import "./Cart.css"

const Cart = ({ cart, tryAgainHandle, selectMeBtnHandle }) => {
	// console.log(cart)
	return (
		<div className="cart col-3 col-sm-12">
			<h4>selected Products</h4>
			{cart?.map((data) => (
				<p key={data.id}>{data?.name}</p>
			))}
			<button onClick={selectMeBtnHandle} className="select-item">
				select me
			</button>
			<button onClick={tryAgainHandle}>try again</button>
		</div>
	)
}

export default Cart
