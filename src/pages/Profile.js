import React from "react";
import ProfileCard from "../components/ProfileCard";


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {user: []}
        this.props.makeRequest('get', '/user/successes').then((resp) => {
            this.setState(resp.data.response)
        })
    }

    render() {
        return (

            <div className="d-flex justify-content-center" style={{alignItems: "center", height: "90vh"}}>
                <div className="col-10 profile-card-out">
                    <div className="profile-card-in">
                        <h1 className="profile-title">Профиль</h1>
                        {this.state.user.length !== 0 &&
                            <p style={{marginTop: "1rem"}}>Приобритенные ПО</p>
                        }
                        {this.state.user.length !== 0 &&
                            this.state.user.map((element) => (
                                <ProfileCard casino={element}/>
                            ))
                        }
                        <div className="d-flex" style={{width: "100%", marginBottom: "1.5rem", marginTop: "2rem"}}>
                            <div className="p-0 col-md-9 col-0"></div>
                            <button onClick={() => this.props.logout()} className="col-12 col-md-3 logout-btn btn">Выйти</button>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Profile