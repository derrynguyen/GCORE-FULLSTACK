import React from 'react'
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import classNames from 'classnames/bind'
import styles from '../CSS/main.module.css'


let cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('header-main')}>
            <div className={cx('header-name')}>
                <p>GCORE <span>TECH</span></p>
            </div>
            <div className={cx('header-navbar')}>
                <NavLink exact className={cx('navbar-item')} to='/home' activeClassName={cx('active')}>
                    <span>Trang chủ</span>
                </NavLink>
                <NavLink exact className={cx('navbar-item')} to='/project' activeClassName={cx('active')}>
                    <span>Dự án</span>
                </NavLink>
                <NavLink exact className={cx('navbar-item')} to='/about' activeClassName={cx('active')}>
                    <span>Về chúng tôi</span>
                </NavLink>
                <NavLink exact className={cx('navbar-item')} to='/donate' activeClassName={cx('active')}>
                    <span>Nạp tiền</span>
                </NavLink>
            </div>
            <div className={cx('header-auth')}>
                <NavLink exact className={cx('navbar-item')} to='/login' activeClassName={cx('active')}>
                    <span>Đăng ký</span>
                </NavLink>
                <NavLink exact className={cx('navbar-item')} to='/register' activeClassName={cx('active')}>
                    <span>Đăng nhập</span>
                </NavLink>
            </div>
        </div>

    )
}
export default Header;