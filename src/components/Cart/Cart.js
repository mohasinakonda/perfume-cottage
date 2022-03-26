import React from "react"
import "./Cart.css"

const Cart = ({ cart, tryAgainHandle, selectMeBtnHandle }) => {
	// console.log(cart)
	return (
		<div className="cart col-lg-3 col-sm-12 ">
			<h4>selected Products</h4>
			{cart?.map((data) => (
				<div
					key={data.id}
					className="d-flex align-items-center justify-content-center m-2"
				>
					<img className="w-25 " src={data.img} alt="" />
					<p key={data.id}>{data?.name}</p>
				</div>
			))}
			<button onClick={selectMeBtnHandle} className="btn btn-info w-75 m-2 ">
				select me
			</button>
			<button className="btn btn-warning w-75 m-2" onClick={tryAgainHandle}>
				try again
			</button>
		</div>
	)
}

export default Cart
