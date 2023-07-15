import React from "react";
import PCRow from "./PCRow";


class PCBox extends React.Component {
    render() {
        return (
            <div className="casino-box-in">
                <h5>Компьютеры</h5>
                <h6 style={{textAlign: "center"}}>{this.props.error}</h6>
                <div className="casino-place">
                    {this.props.hwids.map((element) => (
                        <PCRow hwid={element} handleDelete={this.props.handleDelete}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default PCBox;