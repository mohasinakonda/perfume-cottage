import React, { useEffect } from "react"
import { useState } from "react"
import Cart from "../Cart/Cart"
import Header from "../Header/Header"
import PerfumeCart from "../PerfumeCart/PerfumeCart"
import "./PerfumeShop.css"
const PerfumeShop = () => {
	const [perfumes, setPerfume] = useState([])
	const [cart, setCart] = useState([])
	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((product) => setPerfume(product))
	}, [])
	useEffect(() => {}, [perfumes])
	const handleAddToCart = (product) => {
		const addToCart = [...cart, product]
		setCart(addToCart)
	}
	return (
		<div>
			<Header />
			<div className="shop-container">
				<div className="products-container">
					{perfumes.map((perfume) => (
						<PerfumeCart
							key={perfume.id}
							perfume={perfume}
							handleAddToCart={handleAddToCart}
						/>
					))}
				</div>
				<Cart cart={cart} />
				{/* <h2 className="col-3">cart</h2> */}
			</div>
		</div>
	)
}

export default PerfumeShop
