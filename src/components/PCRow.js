import React from "react";
import { HiOutlineTrash } from "react-icons/hi"

class PCRow extends React.Component {
    hwid = this.props.hwid

    render() {
        return (
            <div className="d-flex flex-row casino-row">
                <h6>{this.hwid.name}</h6>
                <HiOutlineTrash className="trash" onClick={() => this.props.handleDelete(this.hwid.id)}/>
            </div>
        )
    }
}

export default PCRow;