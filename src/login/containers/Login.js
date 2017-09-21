import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    getName,
    getSessionId,
    setName,
    setSessionId,
    login,
    requestAvailableSessions,
    getSessions,
} from '../../../store/ducks/planningPokerDuck';

import View from '../components/Login';

const mapStateToProps = (state) => {
    return {
        name: getName(state),
        sessionId: getSessionId(state),
        sessions: getSessions(state),
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setName,
    setSessionId,
    login,
    requestAvailableSessions,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View);