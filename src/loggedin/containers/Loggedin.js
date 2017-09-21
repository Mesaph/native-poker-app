import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    vote,
    isVoting,
    getClientNames,
    getProgress,
} from '../../../store/ducks/planningPokerDuck';

import View from '../components/Loggedin';

const mapStateToProps = (state) => {
    return {
        clientNames: getClientNames(state),
        voting: isVoting(state),
        progress: getProgress(state),
    }
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    vote,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(View);