import React, { useEffect } from "react"
import { useState } from "react"
import Header from "../Header/Header"
import PerfumeCart from "../PerfumeCart/PerfumeCart"
import "./PerfumeShop.css"
const PerfumeShop = () => {
	const [perfumes, setPerfume] = useState([])
	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((product) => setPerfume(product))
	}, [])
	return (
		<div>
			<Header />
			<div className="shop-container">
				<div className="products-container">
					{perfumes.map((perfume) => (
						<PerfumeCart key={perfume.id} perfume={perfume} />
					))}
				</div>

				<h2 className="col-3">cart</h2>
			</div>
		</div>
	)
}

export default PerfumeShop
