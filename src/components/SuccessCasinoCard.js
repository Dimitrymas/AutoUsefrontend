import React from "react";
import PromoCodeChannelBox from "./PromoCodeChannelBox";

import PCBox from "./PCBox";


class SuccessCasinoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hwids: [...this.props.hwids],
            promoCodes: [],
            channels: [],
            errorChannel: "",
            errorPC: "",
            errorPromoCode: ""
        }
        Promise.all([
            this.props.makeRequest('get', '/promocode/', {type: this.props.type}),
            this.props.makeRequest('get', '/channel/', {type: this.props.type})]
        ).then((resps) => {
            resps.forEach((resp) => {
                this.setState(resp.data.response)
            })
        })
        this.deletePC = this.deletePC.bind(this)
        this.deleteChannel = this.deleteChannel.bind(this)
        this.deletePromoCode = this.deletePromoCode.bind(this)
        this.createChannel = this.createChannel.bind(this)
        this.createPromoCode = this.createPromoCode.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.errorChannel) {
            setTimeout(() => {this.setState({errorChannel: ""})}, 2000)
        }
        if (this.state.errorPromoCode) {
            setTimeout(() => {this.setState({errorPromoCode: ""})}, 2000)
        }
        if (this.state.errorPromoCode) {
            setTimeout(() => {this.setState({errorPC: ""})}, 2000)
        }
    }

    deleteChannel(id) {
        this.props.makeRequest('post', '/channel/delete', {id: id}).then(
            (resp) => {
                if (resp.data.success) {
                    this.setState({channels: []}, () => {
                        this.setState({channels: resp.data.response.channels})
                    })
                } else {
                    this.setState({errorChannel: resp.data.response.error})
                }
            }
        )
    }

    createChannel(value) {
        this.props.makeRequest('post', '/channel/create', {channel: value, type: this.props.type}).then(
            (resp) => {
                if (resp.data.success) {
                    this.setState({channels: []}, () => {
                        this.setState({channels: resp.data.response.channels})
                    })
                } else {
                    this.setState({errorChannel: resp.data.response.error})
                }

            }
        )
    }

    deletePromoCode(id) {
        this.props.makeRequest('post', '/promocode/delete', {id: id}).then(
            (resp) => {
                if (resp.data.success) {
                    this.setState({promoCodes: []}, () => {
                        this.setState({promoCodes: resp.data.response.promoCodes})
                    })
                } else {
                    this.setState({errorPromoCode: resp.data.response.error})
                }
            }
        )

    }

    createPromoCode(value) {
        this.props.makeRequest('post', '/promocode/create', {promocode: value, type: this.props.type}).then(
            (resp) => {
                if (resp.data.success) {
                    this.setState({promoCodes: []}, () => {
                        this.setState({promoCodes: resp.data.response.promoCodes})
                    })
                } else {
                    this.setState({errorPromoCode: resp.data.response.error})
                }
            }
        )
    }

    deletePC(uuid) {
        this.props.makeRequest('post', '/hwid/delete', {id: uuid}).then(
            (resp) => {
                if (resp.data.success) {
                    this.setState({hwids: []}, () => {
                        this.setState({hwids: resp.data.response.hwids})
                    })
                } else {
                    this.setState({errorPC: resp.data.response.error})
                }
            }
        )
    }


    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className="col-11 casino-card d-flex">
                    <div className="casino-card-in justify-content-center row">
                        <div className="col-12 col-lg-5 casino-columns">
                            <div className="casino-box casino-left-box">
                                <PromoCodeChannelBox caption={"Бан лист промокод"} type={"promoCode"} error={this.state.errorPromoCode} els={this.state.promoCodes}
                                                     handleDelete={this.deletePromoCode}
                                                     handleCreate={this.createPromoCode}/>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 casino-columns">
                            <div className="casino-box casino-right-box">
                                <PromoCodeChannelBox caption={"Список каналов"} type={"channel"} error={this.state.errorChannel} els={this.state.channels}
                                            handleDelete={this.deleteChannel}
                                            handleCreate={this.createChannel}/>

                            </div>
                            <div className="casino-box casino-right-box">
                                <PCBox error={this.state.errorPC} handleDelete={this.deletePC}
                                       hwids={this.state.hwids}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SuccessCasinoCard;