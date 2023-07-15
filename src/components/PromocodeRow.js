import React from "react";
import { HiOutlineTrash } from "react-icons/hi"

class PromocodeRow extends React.Component {
    promoCode = this.props.promoCode

    render() {
        return (
            <div className="d-flex flex-row casino-row">
                <h6>{this.promoCode.promoCode}</h6>
                <HiOutlineTrash className="trash" onClick={() => this.props.handleDelete(this.promoCode.id)}/>
            </div>
        )
    }
}

export default PromocodeRow;