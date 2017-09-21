import React, {Component} from "react";
import PropTypes from "prop-types";
import { ProgressViewIOS  } from "react-native";

class Progress extends Component {
    render() {
        const {progress} = this.props;
        return (
            <ProgressViewIOS  progress={progress} />
        );
    }
}

Progress.propTypes = {
    progress: PropTypes.number.isRequired,
};

export default Progress;