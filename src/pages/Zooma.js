import React from "react";
import SuccessCasinoCard from "../components/SuccessCasinoCard";
import FailCasinoCard from "../components/FailCasinoCard";


class Zooma extends React.Component {
    constructor(props) {
        super(props);
        this.state = {card: null}
        this.props.makeRequest('get', '/hwid/', {type: 'zooma'}).then(response => {
            if (response.data.success) {
                this.setState({card: <SuccessCasinoCard makeRequest={this.props.makeRequest} hwids={response.data.response.hwids} type={'zooma'}/>})
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

export default Zooma