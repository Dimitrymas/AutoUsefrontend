import React from "react";
import { HiOutlineTrash } from "react-icons/hi"

class CasinoRow extends React.Component {
    el = this.props.el

    render() {
        return (
            <div className="d-flex flex-row casino-row">
                <h6>{this.el[this.props.type]}</h6>
                <HiOutlineTrash className="trash" onClick={() => this.props.handleDelete(this.el.id)}/>
            </div>
        )
    }
}

export default CasinoRow;