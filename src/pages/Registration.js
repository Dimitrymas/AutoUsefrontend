import {Link} from "react-router-dom";
import axios from "axios";
import React from "react";

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: '', rePassword: '', error: ''}
        this.handleSubmit = this.handleSubmit.bind(this)

    }


    handleSubmit(e) {
        e.preventDefault()
        this.setState({error: ""})
        if (this.state.login === "") {
            this.setState({error: 'Введите логин'})
        } else if (this.state.password === "") {
            this.setState({error: 'Введите пароль'})
        } else if (this.state.password !== this.state.rePassword) {
            this.setState({error: 'Пароли не совпадают'})
        } else {
            axios.post('/user/registration', {
                login: this.state.login,
                password: this.state.password,
                rePassword: this.state.rePassword
            }).then(response => {
                const data = response.data
                if (!data.success) {
                    this.setState(data.response)
                    setTimeout(() => this.setState({error: ""}), 2000)
                } else {
                    this.props.handleLogin(data.response.accessToken, data.response.refreshToken, data.response.expired)
                }
            })
        }
    }


    render() {
        return (

            <div className="d-flex flex-row-reverse d-flex" style={{alignItems: "center", height: "90vh"}}>
                <div className="col-1 col-lg-1"></div>
                <div className="col-10 col-lg-4 container justify-content-center mt-3 ml-3 login-registration-card">
                    <form onSubmit={(e) => this.handleSubmit(e)} className="lgrg-div-i">
                        <h1 className="login-registration-title">Создать учетную запись</h1>
                        <p style={{width: "100%", textAlign: "center", marginBottom: "0"}}>{this.state.error}</p>
                        <p className="mb-2 lgrg-q">Уже есть аккаунт?
                            <Link to={'/registration'} style={{color: '#271155', fontWeight: "500"}}>Войти в учетную
                                запись</Link>
                        </p>
                        <label htmlFor="inputLogin" className="lgrg-label">Логин</label>
                        <input type="text" onChange={(e) => this.setState({login: e.target.value})}
                               className="form-control inp" id="inputLogin"/>
                        <label htmlFor="inputPassword" className="lgrg-label">Пароль</label>
                        <input type="password" onChange={(e) => {
                            this.setState({password: e.target.value})
                        }} className="form-control inp" id="inputPassword"/>
                        <label htmlFor="inputRePassword" className="lgrg-label">Повторите пароль</label>
                        <input type="password" onChange={(e) => {
                            this.setState({rePassword: e.target.value})
                        }} className="form-control inp" id="inputRePassword"/>
                        <div className="d-flex flex-row-reverse" style={{marginTop: "1rem", marginBottom: "1rem"}}>
                            <button className="btn lgrg-btn col-12 col-lg-6">Продолжить</button>
                        </div>
                    </form>
                </div>
                <div className="col-1"></div>
            </div>
        )
    }
}

export default Registration;
