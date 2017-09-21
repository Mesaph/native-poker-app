import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStep, closeWebsocket } from '../store/ducks/planningPokerDuck';
import { STEPS } from '../constants/steps';

import Disconnected from './disconnected/containers/Disconnected';
import Loggedin from './loggedin/containers/Loggedin';
import Login from './login/containers/Login';

class PlanningPoker extends Component {
    componentWillUnmount() {
        this.props.closeWebsocket();
    }

    render() {
        const {step} = this.props;
        switch (step) {
            case STEPS.DISCONNECTED:
                return <Disconnected />;
            case STEPS.LOGIN:
                return <Login />;
            case STEPS.LOGGEDIN:
                return <Loggedin />;
            default:
                return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        step: getStep(state),
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    closeWebsocket
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlanningPoker);