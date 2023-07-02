import React, { useRef, useState } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import classNames from 'classnames/bind';
import img_bg from '../Image/bg_3.png'
import styles from '../CSS/main.module.css';


let cx = classNames.bind(styles);

const Home = () => {
    return (
        <>
            <div className={cx('home')}>
                <div className={cx('content-home')}>
                    <h3>Chơi ngay máy chủ GVC:RP để trải nghiệm hệ thống máy chủ hiện đại nhất Việt Nam</h3>
                    <div className={cx('home-content')}>
                        Dự án GVC:RP là một dự án kết hợp giữa AI và CORE FIVEM để phát triển lên 1 máy chủ hoàn toàn hiện đại. Sử dụng những công nghệ mới nhất để phát triển. Phần CORE được phát triển bởi GCORE giúp máy chủ có sự khác biệt với các máy chủ khác ở Việt Nam
                    </div>
                    <div className={cx('button')}>
                        <button>Tham gia</button>
                    </div>
                </div>
                <div className={cx('img-home')}>
                    <img src={img_bg} />
                </div>
            </div>

            <div className={cx('list-server')}>
                <h3>Các máy chủ hiện có</h3>
                <div className={cx('list')}>
                    <div className={cx('server-one')}>
                        <h4>GTA VIET COMMUNITY</h4>
                        <p>Người chơi</p>
                        <span>300/1000</span>
                        <button>Kết nối</button>
                    </div>
                    <div className={cx('server-one')}>
                        <h4>NEW YORK ROLEPLAY</h4>
                        <p>Người chơi</p>
                        <span>0/1000</span>
                        <button>Kết nối</button>
                    </div>
                </div>
            </div>

            <h1>Cách để tham gia</h1>

            <div className={cx('howtoplay')}>
                <div className={cx('box')}>
                    <h5>Bước 1</h5>
                    <h3>GAME GTA5</h3>
                    <p>Tải game từ các trang như Steam hoặc Epic</p>
                    <button>Liên kết</button>
                </div>
                <div className={cx('box')}>
                    <h5>Bước 2</h5>
                    <h3>Launcher GCORE</h3>
                    <p>Nền tảng chơi GAME nhập vai</p>
                    <button>Tải xuống</button>
                </div>
                <div className={cx('box')}>
                    <h5>Bước 3</h5>
                    <h3>Kết nối máy chủ</h3>
                    <p>Mở Launcher lên và kết nối</p>
                    <button>Kết nối</button>
                </div>
            </div>
        </>


    )
}
export default Home
