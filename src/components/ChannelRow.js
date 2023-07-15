import React from "react";
import { HiOutlineTrash } from "react-icons/hi"

class ChannelRow extends React.Component {
    channel = this.props.channel

    render() {
        return (
            <div className="d-flex flex-row casino-row">
                <h6>{this.channel.channel}</h6>
                <HiOutlineTrash className="trash" onClick={() => this.props.handleDelete(this.channel.id)}/>
            </div>
        )
    }
}

export default ChannelRow;