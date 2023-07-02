import React, { useRef, useState } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import classNames from 'classnames/bind';
import styles from '../CSS/main.module.css';
let cx = classNames.bind(styles);

const Footer = () => {
    return (
        <div className={cx('footer')}>
            <div className={cx('left')}>
                <div className={cx('logo')}>GCORE <span>TECH</span></div>
                <h3><span style={{ color: 'red' }}>GVC:RP</span> không được liên kết với hoặc xác nhận bởi Take-Two, Rockstar North Interactive hoặc bất kỳ chủ sở hữu quyền nào khác. Tất cả các nhãn hiệu được sử dụng thuộc về chủ sở hữu tương ứng của họ.</h3>
            </div>
            <div className={cx('center')}>
                <p>Cam kết không ăn cắp thông tin người dùng</p>
                <p>Bảo mật tối đa thông tin</p>
                <p>Nền tảng tốt không giựt lag</p>
            </div>
            <div className={cx('right')}>
                <span><i className="fa-brands fa-discord"></i> https://discord.gg/MwFXQptX</span>
                <span><i className="fa-regular fa-envelope"></i> thanhhaivevo@gmail.com</span>
            </div>
        </div>
    )
}
export default Footer