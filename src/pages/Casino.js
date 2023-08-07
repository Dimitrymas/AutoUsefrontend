import React from "react";
import SuccessCasinoCard from "../components/SuccessCasinoCard";
import FailCasinoCard from "../components/FailCasinoCard";

class Casino extends React.Component {
    constructor(props) {
        super(props);
        this.state = {card: null};
    }

    fetchData = () => {
        this.props
            .makeRequest("get", "/hwid/", {type: this.props.type})
            .then((response) => {
                if (response.data.success) {
                    this.setState({card: null}, () => {
                            this.setState({
                                    card: <SuccessCasinoCard
                                        makeRequest={this.props.makeRequest}
                                        hwids={response.data.response.hwids}
                                        type={this.props.type}
                                    />
                                }
                            )
                        }
                    );
                } else {
                    this.setState({card: null}, () => {
                        this.setState({card: <FailCasinoCard type={this.props.type}/>})
                    });
                }
            });
    };

    // Выполните начальный запрос к API при монтировании компонента
    componentDidMount() {
        this.fetchData();
    }

    // Отслеживайте изменения в this.props и выполняйте новый запрос к API при необходимости
    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {

            this.fetchData();
        }
    }

    render() {
        return <>{this.state.card}</>;
    }
}

export default Casino;