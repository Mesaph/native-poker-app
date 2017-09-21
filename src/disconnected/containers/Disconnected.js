import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {initWebsocket, getHost, setHost} from "../../../store/ducks/planningPokerDuck";
import View from '../components/Disconnected';

const mapStateToProps = (state) => ({
    host: getHost(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    initWebsocket,
    setHost,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View);