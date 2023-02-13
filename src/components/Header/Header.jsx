import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'

// import RegisterModal from '../RegisterModal';
// import MenuModal from '../MenuModal';

import ThanksModal from '../Modals/ThanksModal';

export const Header = () => {
	// call action
	// const dispatch = useDispatch();
	// read state
	// const { isLoginOpen, isRegisterOpen, isMenuOpen, isThanksOpen } = useSelector((store) => store.modal);


	return (
		<header className={style.header}>
			<div>
                <span className={style.logo}>LinkStaff Shop Test</span>
            </div>
			<div className={style.linksContainer}>
				<NavLink to="/" className={style.link}>ホーム</NavLink>
				<NavLink to="/admin" className={style.link}>管理画面</NavLink>
			</div>
			<div className={style.presentation}></div>


			{/* <div className={style.user}>
				<button className={style.button} onClick={() => clickLogin()}>ログイン</button>
				<button className={style.button} onClick={() => clickRegister()}>新規登録</button>
			</div> */}
			{/* <ThanksModal open={isThanksOpen} /> */}
		</header>
	)
}


