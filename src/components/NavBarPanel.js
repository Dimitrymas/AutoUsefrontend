import React from "react";
import {Link} from "react-router-dom";


class NavBarPanel extends React.Component {
    render() {
        return (<>
                <nav className="col-11 navbar navbar-expand-lg navbar-dark">
                    <Link className="navbar-brand" to="/">Главная страница</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            {!this.props.isLoggedIn ? (<>
                                <li className="nav-item">
                                    <Link className="navbar-brand" to="/user/login">Войти в аккаунт</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="navbar-brand" to="/user/registration">Создать аккаунт</Link>
                                </li>
                            </>) : (<>
                                <li className="nav-item">
                                    <Link className="navbar-brand" to="/product/dragonmoney">Dragon Money</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="navbar-brand" to="/product/zooma">Zooma</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="navbar-brand" to="/product/ezcash">EzCash</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="navbar-brand" to="/user/profile">Профиль</Link>
                                </li>
                                {this.props.isAdmin && (
                                    <li className="nav-item">
                                        <Link className="navbar-brand" to="/admin">Админ Панель</Link>
                                    </li>
                                )}
                            </>)}
                        </ul>
                    </div>
                </nav>
                <div className="line"></div>
            </>
        )
    }
}

export default NavBarPanel;