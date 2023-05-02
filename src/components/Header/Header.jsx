import React from "react";
import "./header.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    const link = "text-xl font-bold";
    const count = useSelector((state) => state.cart.count);
    console.log(count);

    return ( 
    <div className=" flex items-center justify-between mb-5">
        <img className="" src="/images/logo.png" alt="" />
        <menu>
            <nav>
                <ul className=" flex gap-4">
                    <li><a className={link} href="/">Магазины</a></li>
                    <li><a className={link} href="/">Акции</a></li>
                    <li><a className={link} href="/">Доставка и оплата</a></li>
                </ul>
            </nav>
        </menu>
        <div>
            <Link className=" flex" to="/cartpage">
                <img src="/images/Vector.svg" alt="" />
                <span className=" w-5 h-5 flex items-center justify-center text-white rounded-full bg-blue-700">{count}</span>
            </Link>
        </div>
    </div>
    );
}