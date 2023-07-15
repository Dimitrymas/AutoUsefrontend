import React from "react";

class AdminRow extends React.Component {

    user = this.props.user

    render() {
        return (
            <div className="d-flex flex-row admin-row">
                <h6 className="col-2" style={{fontSize: "1.7rem"}}>{this.user.login}</h6>
                <input className="check-input col-1" type="checkbox" checked={this.user.dragonMoney} onChange={(event) => {this.props.changeUser(this.user.id, 'dragonMoney', event.target.checked)}}/>
                <input className="check-input col-1" type="checkbox" checked={this.user.zooma} onChange={(event) => {this.props.changeUser(this.user.id, 'zooma', event.target.checked)}}/>
                <input className="check-input col-1" type="checkbox" checked={this.user.ezCash} onChange={(event) => {this.props.changeUser(this.user.id, 'ezCash', event.target.checked)}}/>
                <input className="check-input form-control col-1" type="number" value={this.user.dragonMoneyHwids} onChange={(event) => {this.props.changeUser(this.user.id, 'dragonMoneyHwids', event.target.value)}}/>
                <input className="check-input form-control col-1" type="number" value={this.user.zoomaHwids} onChange={(event) => {this.props.changeUser(this.user.id, 'zoomaHwids', event.target.value)}}/>
                <input className="check-input form-control col-1" type="number" value={this.user.ezCashHwids} onChange={(event) => {this.props.changeUser(this.user.id, 'ezCashHwids', event.target.value)}}/>
            </div>
        )
    }
}

export default AdminRow;