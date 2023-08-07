import React from "react";
import CasinoRow from "./CasinoRow";


class PromoCodeChannelBox extends React.Component {
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
            <div className="casino-box-in d-flex flex-column justify-content-between">
                <h5>{this.props.caption}</h5>
                {!!this.props.error &&
                    <h6 style={{textAlign: "center"}}>{this.props.error}</h6>
                }


                <div className="casino-place d-flex flex-column">
                    <div className="casino-place-in">
                        {this.props.els.map((element) => (
                            <CasinoRow
                                type={this.props.type}
                                el={element}
                                handleDelete={this.props.handleDelete}
                            />
                        ))}
                    </div>
                    <form
                        className="create-raw d-flex flex-column flex-md-row mt-auto"
                        ref={(element) => (this.myForm = element)}
                        onSubmit={(event) => this.handleSubmit(event)}
                    >
                        <input
                            className="casino-input form-control col-12 col-md-7"
                            onChange={(event) => {
                                this.setState({input: event.target.value});
                            }}
                        />
                        <div className="col-md-1"></div>
                        <button className="btn casino-btn col-12 col-md-4">Добавить</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PromoCodeChannelBox;