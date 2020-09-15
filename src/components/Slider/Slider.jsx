import * as React from "react";
import { Component } from "react";
import { Modal } from "react-responsive-modal";
import Map from "../Map/Map"
import Gallery from "../Gallery/Gallery"
import "../../App.css";
import "react-responsive-modal/styles.css";

export default class Slider extends Component {
    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div>
                <button onClick={this.onOpenModal} className="button"> Click to open </button>
                <Map onClick={this.onOpenModal} />
                <Modal open={open} onClose={this.onCloseModal}>
                    <Gallery />
                    <h3> Lorem ipsum </h3>
                    <p className="paragraph"> Lorem ipsum dolor sit amet </p>
                </Modal>
            </div>
        );
    }
}
