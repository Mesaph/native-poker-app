import React, {Component} from "react";
import PropTypes from "prop-types";
import { ProgressBarAndroid } from "react-native";

class Progress extends Component {
    render() {
        const {progress} = this.props;
        return (
            <ProgressBarAndroid
                progress={progress}
                styleAttr="Horizontal"
                indeterminate={false}
            />
        );
    }
}

Progress.propTypes = {
    progress: PropTypes.number.isRequired,
};

export default Progress;