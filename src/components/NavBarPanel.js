import React from "react"
import {Link} from "react-router-dom";

class NavBarPanel extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link className="navbar-brand" to="/">Главная страница</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            {!this.props.isLoggedIn ?
                                <>
                                    <li className="nav-item"><Link className="nav-link" to="/login">Ввойти в
                                        аккаунт</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/registration">Создать
                                        аккаунт</Link></li>
                                </>
                                : <li className="nav-item"><Link className="nav-link" to="/profile">Профиль</Link></li>
                            }
                            <li className="nav-item"><Link className="nav-link" to="/product/dragonmoney">Dragon Money
                            </Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/product/zooma">Zooma
                            </Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/product/ezcash">EzCash
                            </Link></li>
                            {this.props.isAdmin &&
                                <li className="nav-item"><Link className="nav-link" to="/admin">Админ панель</Link></li>
                            }

                        </ul>
                    </div>

                </nav>
                <div className="white-bar"/>
            </>
        )
            ;
    };
}

export default NavBarPanel