import React from "react"
import './App.css';
import axios from "axios";
import NavBarPanel from "./components/NavBarPanel";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import Base from "./pages/Base";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Casino from "./pages/Casino";

class App extends React.Component {

    constructor(props) {
        super(props);
        axios.defaults.baseURL = 'https://auto-use.ru/api'
        const accessToken = localStorage.getItem('accessToken')
        this.state = {isLoggedIn: Boolean(accessToken), isAdmin: ""}

        if (accessToken) {
            axios.defaults.headers.common['authorization'] = `Bearer ${accessToken}`
        }


        this.handleLogout = this.handleLogout.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleRefresh = this.handleRefresh.bind(this)
        this.makeRequest = this.makeRequest.bind(this)

        if (this.state.isLoggedIn) {
            this.makeRequest('get', 'user/role').then((resp) => {
                    if (resp.data.success) {
                        this.setState(resp.data.response)
                    }
                }
            )
        }

    }

    handleLogout() {
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('expiredTime');
        delete axios.defaults.headers.common['authorization']
        this.setState({isLoggedIn: false});

    }

    handleLogin(accessToken, refreshToken, expiredTime) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('expiredTime', expiredTime);
        axios.defaults.headers.common['authorization'] = `Bearer ${accessToken}`
        this.setState({isLoggedIn: true})
    }

    handleRefresh(accessToken, expiredTime) {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('expiredTime', expiredTime)
        axios.defaults.headers.common['authorization'] = `Bearer ${accessToken}`
    }

    async makeRequest(method, path, data) {
        let expiredTime = Number(localStorage.getItem('expiredTime'))
        if (this.state.isLoggedIn && (Date.now() / 1000) > expiredTime) {
            const token = localStorage.getItem('refreshToken')
            try {
                const response = await axios.post('/user/refresh', null, {headers: {authorization: `Bearer ${token}`}})
                const data = response.data
                if (data.success) {

                    this.handleRefresh(data.response.accessToken, data.response.expired)
                } else {
                    this.handleLogout()
                }
            } catch {
                this.handleLogout()
            }


        }

        if (method === 'get') {
            return (await axios.get(path, {params: data}))

        } else {
            return (await axios.post(path, data))

        }

    }

    render() {
        return (<Router>
            <NavBarPanel isLoggedIn={this.state.isLoggedIn} isAdmin={this.state.isAdmin}/>
            <Routes>
                <Route exact path="/" element={<Base/>}/>

                <Route exact path="/user/login"
                       element={!this.state.isLoggedIn ? <Login handleLogin={this.handleLogin}/> :
                           <Navigate replace to={"/"}/>}/>
                <Route exact path="/user/registration"
                       element={!this.state.isLoggedIn ? <Registration handleLogin={this.handleLogin}/> :
                           <Navigate replace to={"/"}/>}/>

                <Route exact path="/user/profile"
                       element={this.state.isLoggedIn ?
                           <Profile makeRequest={this.makeRequest} logout={this.handleLogout}/> :
                           <Navigate replace to={"/"}/>}/>
                }
                <Route exact path="/admin"
                       element={this.state.isAdmin ?
                           <Admin makeRequest={this.makeRequest}/> :
                           <Navigate replace to={"/"}/>}/>
                }
                <Route exact path="/product/dragonmoney"
                       element={<Casino type={"dragonMoney"} makeRequest={this.makeRequest}/>}/>
                }
                <Route exact path="/product/zooma"
                       element={<Casino type={"zooma"} makeRequest={this.makeRequest} />}/>
                }
                <Route exact path="/product/ezcash"
                       element={<Casino type={"ezCash"} makeRequest={this.makeRequest}/>}/>
                }

            </Routes>
        </Router>)
    }
}

export default App;
