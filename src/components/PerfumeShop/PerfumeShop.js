import React, { useEffect } from "react"
import { useState } from "react"
import Cart from "../Cart/Cart"
import Header from "../Header/Header"
import PerfumeCart from "../PerfumeCart/PerfumeCart"
import "./PerfumeShop.css"
const PerfumeShop = () => {
	const [perfumes, setPerfume] = useState([])
	let [cart, setCart] = useState([])

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
		<div className="container-fluid">
			<Header />
			<div className=" row m-3 ">
				<div className=" row col-lg-9 align-items-center justify-content-center">
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
			</div>
		</div>
	)
}

export default PerfumeShop
