import * as React from "react";
import { Component } from "react";

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.onClickForward = this.onClickForward.bind(this)
        this.onClickBack = this.onClickBack.bind(this)

        const img0 = require('../../images/img00.jpg');
        const img1 = require('../../images/img01.jpg');
        const img2 = require('../../images/img02.jpg');

        this.state = {
            index: 0,
            imgList: [img0, img1, img2]
        }

    }

    onClickForward() {
        if (this.state.index + 1 === this.state.imgList.length) {
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    onClickBack() {
        if (this.state.index - 1 === -1) {
            this.setState({
                index: this.state.imgList.length - 1
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    render() {
        return (
            <div className="gallery">
                <img src={this.state.imgList[this.state.index]} alt="" /> <br />
                <button onClick={this.onClickBack} className="button"> Back </button>
                <button onClick={this.onClickForward} className="button"> Forward </button>
            </div>
        )

    }
}
