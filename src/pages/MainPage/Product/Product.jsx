import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "../Product/Product.module.css"

const Product = (props) => {

  return (
    <div className={style.item}>
      <NavLink to={'/purchase/' + props.id}>
        <img src={props.image_url} alt="img" />
      </NavLink>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <b>{Number(props.price).toLocaleString('ja-JP',{ style: 'currency', currency: 'JPY' })} 円</b>
      <button className={style.addToCart}>カートに入れる</button>
    </div>
  )
}

export default Product