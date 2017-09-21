import React from 'react'
import { connect } from 'react-redux';
import { getStep } from '../store/ducks/planningPokerDuck';
import { STEPS } from '../constants/steps';

import Disconnected from './disconnected/containers/Disconnected';
import Loggedin from './loggedin/containers/Loggedin';
import Login from './login/containers/Login';

const PlanningPoker = ({ step }) => {
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
};

const mapStateToProps = (state) => {
    return {
        step: getStep(state),
    }
};

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlanningPoker);