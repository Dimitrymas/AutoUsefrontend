import React from "react";
import Card from "../components/Card";


class Base extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center preview-card-holder"
                 style={{alignItems: "center", minHeight: "80vh", marginBottom: "3rem"}}>
                <div className="d-flex col-12 justify-content-center preview-card-holder">
                    <Card casino={'Dragon Money'} price={400} numComputers={1} href={'/product/dragonmoney'}/>
                    <Card casino={'Zooma'} price={400} numComputers={1} href={'/product/zooma'}/>
                    <Card casino={'EzCash'} price={300} numComputers={1} href={'/product/ezcash'}/>
                </div>
            </div>
        )
    }
}

export default Base;