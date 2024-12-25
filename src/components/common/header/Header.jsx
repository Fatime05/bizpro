import React from 'react'
import style from './Header.module.css'
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
  return (
    <div className={style.container}>
        <div className={style.context}>
            <div className={style.logo}>
                <img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png" alt="" />
            </div>

            <div className={style.navbar}>
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">PORTFOLIO</a></li>
                    <li><a href="#">TEAM</a></li>
                    <li><a href="#">SKILL</a></li>
                    <li><a href="#">CLIENTS</a></li>
                    <li><a href="#">PRICING</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
            <div className={style.btn}><CiMenuBurger /></div>
        </div>
    </div>
  )
}

export default Header