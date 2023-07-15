import React from "react";
import AdminRow from "../components/AdminRow";

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: [], message: ""}
        this.props.makeRequest('get', '/user/').then((resp) => {
            if (resp.data.success) {
                this.setState({users: []}, () => this.setState(resp.data.response))
            }

        })
        this.handleClick = this.handleClick.bind(this)
        this.changeUser = this.changeUser.bind(this)
    }

    changeUser(id, type, value) {
        let users = this.state.users
        let currentUser = users.filter((user) => user.id === id)[0]
        let otherUsers = users.filter((user) => user.id !== id)
        currentUser[type] = value
        this.setState({users: []}, () => this.setState({users: [...otherUsers, currentUser]}, () => console.log(this.state.users)))
    }

    handleClick() {
        this.props.makeRequest("post", "/user/edit", {users: this.state.users}).then((resp) => {
            const data = resp.data
            if (data.success) {
                this.setState({message: data.response.message})
            } else {
                this.setState({message: data.response.error})
            }
        })

    }

    render() {
        return (
            <div className="d-flex justify-content-center"
                 style={{alignItems: "center"}}>
                <div className="col-11 admin-card">
                    <h4>{this.state.message}</h4>
                    <div className="d-flex flex-column  admin-card-in">
                        {
                            this.state.users.map((el) => (
                                    <AdminRow user={el} changeUser={this.changeUser}/>
                                )
                            )
                        }
                        <button className="col-3 btn" onClick={() => {
                            this.handleClick()
                        }}>Подтведить
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;