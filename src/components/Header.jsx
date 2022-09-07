import style from "./Header.module.css";
import logo from "../assets/logo.svg";
import banner from "../assets/banner.svg";
import { InstagramLogo, TiktokLogo } from "phosphor-react";

export function Header() {
    return (
        <header className={style.header}>
            <div className={style.headerWrapp}>
                <img src={banner} alt="" className={style.banner} />
                <img
                    src={logo}
                    alt="logo do supermercado"
                    className={style.logotype}
                />
                <nav className={style.navigator}>
                    <a href="#">Horários</a>
                    <a href="#">Contato</a>
                    <a href="#">
                        <InstagramLogo size={36} className={style.social} />
                    </a>
                    <a href="#">
                        <TiktokLogo size={36} className={style.social} />
                    </a>
                </nav>
            </div>
        </header>
    );
}
