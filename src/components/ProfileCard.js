import React from "react";
import {Link} from "react-router-dom";

class ProfileCard extends React.Component {

    casino = this.props.casino

    render() {
        return (
            <Link to={"/product/" + this.casino.title} className="profile-card">
                <h4>{this.casino.title}</h4>
                <h5>Доступно компьютеров: {this.casino.hwids}</h5>
            </Link>
        )
    }
}

export default ProfileCard;