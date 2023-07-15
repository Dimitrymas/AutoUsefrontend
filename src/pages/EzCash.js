import React from "react";
import SuccessCasinoCard from "../components/SuccessCasinoCard";
import FailCasinoCard from "../components/FailCasinoCard";


class EzCash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {card: null}
        this.props.makeRequest('get', '/hwid/', {type: 'ezCash'}).then(response => {
            if (response.data.success) {
                this.setState({card: <SuccessCasinoCard makeRequest={this.props.makeRequest} hwids={response.data.response.hwids} type={'ezCash'}/>})
            } else {
                this.setState({card: <FailCasinoCard/>})
            }

        })

    }



    render() {
        return (
            <>{this.state.card}</>
        )
    }
}

export default EzCash