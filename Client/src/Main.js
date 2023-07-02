
import React, { useRef, useState } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import classNames from 'classnames/bind'
import styles from './CSS/main.module.css'
import Header from "./Component/Header";
import Home from "./Component/Home";
import Footer from "./Component/Footer";




let cx = classNames.bind(styles);
const Main = () => {
    return (
        <div className={cx("main")}>
            <div className={cx('header')}>
                <Header />
                <Switch>
                    <Route path='/home'>
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </div>

    )
}

export default Main;
