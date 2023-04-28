import React, {useState} from "react";
import styles from "./Navbar.module.css";
import {Link} from "react-router-dom";
import logo from '../assets/logo-small-white.png';

function Navbar() {
    const [navStyle, setNavStyle] = useState(false);
    const changeBackground = () => {
      if (window.scrollY >= 50) {
        setNavStyle(true);
      } else {
        setNavStyle(false);
      }
    }
    window.addEventListener('scroll', changeBackground);

    const [navList, setNavList] = useState(false);
    const showHideNavList = () => {
      setNavList(!navList);
      window.scroll(0, 0);
    };
  
    return (
      <nav className={navStyle ? styles.navbar + ' ' + styles.navbarActive : styles.navbar}>
        <div className={styles.container}>
          <a href='#root'><img src={logo} alt="Header logo"/></a>
          <div className={styles.menuBtn} onClick={showHideNavList}>
            <div className={styles.menuBtnLine}></div>
          </div>
          <ul className={navList ? styles.menu : styles.menuHidden} onClick={showHideNavList}>
            <li className={styles.closeIcon}><a>&#x2716;</a></li>
            <li onClick={showHideNavList}><Link to="/" >Головна</Link></li>
            <li onClick={showHideNavList}><Link to="/services" >Послуги</Link></li>
            <li onClick={showHideNavList}><Link to="/doctors" >Лікарі</Link></li>
            <li onClick={showHideNavList}><Link to="/prices" >Ціни</Link></li>
            <li onClick={showHideNavList}><Link to="/gallery" >Галерея</Link></li>
            <li onClick={showHideNavList}><Link to="/contacts" >Контакти</Link></li>
          </ul>
        </div>
      </nav>
    )
}
  
export default Navbar;

//style={(navList) ? {display: 'block'} : {display: 'none'}}
