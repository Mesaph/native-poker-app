import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {initWebsocket} from "../../../store/ducks/planningPokerDuck";

class Login extends Component {
    constructor(props) {
        super(props);

        this.interval = null;
    }

    componentWillMount() {
        this.props.initWebsocket();
        this.interval = setInterval(this.props.initWebsocket, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return null;
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    initWebsocket,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);