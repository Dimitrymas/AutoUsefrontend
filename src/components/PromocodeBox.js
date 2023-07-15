import React from "react";
import PromocodeRow from "./PromocodeRow";


class PromocodeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ""}
    }

    handleSubmit(event) {
        event.preventDefault()
        if (this.state.input) {
            this.props.handleCreate(this.state.input)
            this.setState({input: ""})
            this.myForm.reset()
        }
    }

    render() {
        return (
            <div className="casino-box-in">
                <h5>Бан-лист промокодов</h5>
                <h6 style={{textAlign: "center"}}>{this.props.error}</h6>
                <div className="casino-place">
                    <div className="casino-place-in">
                        {this.props.promoCodes.map((element) => (
                            <PromocodeRow promoCode={element} handleDelete={this.props.handleDelete}/>
                        ))}

                    </div>
                    <form className="d-flex create-raw flex-column flex-md-row" ref={(element) => this.myForm = element}
                          onSubmit={(event) => this.handleSubmit(event)}>
                        <input className="casino-input form-control col-12 col-md-7" onChange={(event) => {
                            this.setState({input: event.target.value})
                        }}/>
                        <div className="col-md-1"></div>
                        <button className="btn casino-btn col-12 col-md-4">Добавить</button>
                    </form>
                </div>


            </div>
        )
    }
}

export default PromocodeBox;