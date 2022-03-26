import React, { useEffect } from "react"
import { useState } from "react"
import Cart from "../Cart/Cart"
import Header from "../Header/Header"
import PerfumeCart from "../PerfumeCart/PerfumeCart"
import "./PerfumeShop.css"
const PerfumeShop = () => {
	const [perfumes, setPerfume] = useState([])
	let [cart, setCart] = useState([])
	const [empty, setEmpty] = useState([])
	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((product) => setPerfume(product))
	}, [])
	useEffect(() => {}, [perfumes])
	const handleAddToCart = (product) => {
		const addToCart = [...cart, product]
		const newCartItems = []
		if (addToCart.length > 4) {
			alert("Opps! only four item you will added")
			return
		}
		addToCart.map((items) => {
			if (newCartItems.indexOf(items) === -1) {
				newCartItems?.push(items)
			}
		})

		setCart(newCartItems)
	}
	const selectMeBtnHandle = () => {
		const randomNumber = Math.floor(Math.random() * cart.length)
		const randomItem = [cart[randomNumber]]
		setCart(randomItem)
	}
	const tryAgainHandle = () => {
		setCart([])
	}
	return (
		<div>
			<Header />
			<div className="shop-container row container">
				<div className="products-container row col-9 g-5 container">
					{perfumes.map((perfume) => (
						<PerfumeCart
							key={perfume.id}
							perfume={perfume}
							handleAddToCart={handleAddToCart}
						/>
					))}
				</div>
				<Cart
					cart={cart}
					selectMeBtnHandle={selectMeBtnHandle}
					tryAgainHandle={tryAgainHandle}
				/>
				{/* <h2 className="col-3">cart</h2> */}
			</div>
		</div>
	)
}

export default PerfumeShop
