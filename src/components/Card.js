import React from "react";
import {Link} from "react-router-dom";


class Card extends React.Component {
    render() {
        return (<>
                <Link to={this.props.href} style={{textDecoration: 'none', color: 'white'}}
                      className="col-10 col-lg-3 d-flex container preview-card">

                    <div className="container justify-content-center mt-3 ml-3 mr-5">
                        <h3>{this.props.casino}</h3>

                        <p className="card-p mb-4">Программа для автоматического использования промокодов на
                            сайте {this.props.casino}</p>
                        <p className="card-p">Количество компьютеров: {this.props.numComputers}</p>
                        <h1 className="card-h1 mb-3">{this.props.price} ₽</h1>
                    </div>


                </Link>
                <div className="preview-effect"></div>
            </>
        )
    }
}

export default Card