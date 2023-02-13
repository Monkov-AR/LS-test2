import React from 'react'
import { useState } from "react"
import {
	useGetProductsQuery,
} from '../../features/products/productsSlice'

import Product from './Product/Product'
import style from "./MainPage.module.css";
import image_product from '../../assets/images/product.png'
import preloader from "../../assets/images/preloader.svg"

export const MainPage = () => {

	//初期表示では、価格が安い順に並べる
	let [orderType, setOrderType] = useState('price')
	const [order, setOrder] = useState("ASC")

	const {
		data: products,
		isLoading,
		isSuccess,
		isError,
		error
	} = useGetProductsQuery()

	const changeValue = (e) => {
		setOrderType(e.target.value)
		prepareContent()
	}
	function orderDirection() {
		if (order === 'ASC') {
			setOrder('DSC')
		} else {
			setOrder('ASC')
		}
	}

	let content
	if (isLoading) {
		content = <img src={preloader} />
	} else if (isSuccess) {
		prepareContent()
	} else if (isError) {
		content = <p>{error}</p>
	}

	// name, stock, price
	function prepareContent() {
		let cp = [...products.data]
		let sp
		if (orderType === 'price') {
			if (order === 'ASC') {
				sp = cp.sort((a, b) => parseInt(a.attributes.price) > parseInt(b.attributes.price) ? 1 : -1)
			} else {
				sp = cp.sort((a, b) => parseInt(a.attributes.price) < parseInt(b.attributes.price) ? 1 : -1)
			}
		} else {
			if (orderType === 'stock') {
				if (order === 'ASC') {
					sp = cp.sort((a, b) => a.attributes.stock > b.attributes.stock ? 1 : -1)
					console.log("sp=", sp)
				} else {
					sp = cp.sort((a, b) => a.attributes.stock < b.attributes.stock ? 1 : -1)
				}
			} else {
				if (orderType === 'name') {
					if (order === 'ASC') {
						console.log("ASC")
						sp = cp.sort((a, b) => a.attributes.name.toLowerCase() < b.attributes.name.toLowerCase() ? 1 : -1)
					} else {
						sp = cp.sort((a, b) => a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase() ? 1 : -1)
						console.log("DSC")
					}
				}
			}
		}

		content = sp.map(product => { //JSON.stringify(products)
			let image_url = image_product
			let defDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, illo?"
			if (product.attributes.image.data != null) {
				image_url = 'https://lusty.asia:1443' + product.attributes.image.data[0].attributes.url
			}
			return (<Product image_url={image_url}
				id={product.id}
				name={product.attributes.name}
				description={defDescription}
				price={product.attributes.price} />
			)
		})
	}

	return (
		<div>
			<div /*Див с кнопками сортировки*/>
				<button onClick={() => orderDirection()}>並び順:{order}</button>
				<select value={orderType} onChange={changeValue}>
					<option value="price">価格順</option>
					<option value="name">名前順</option>
					<option value="stock">在庫順</option>
				</select>
			</div>
			<div className={style.main}>
				{content}
			</div>
		</div>
	)
}
