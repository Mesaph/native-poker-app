import React, {Component} from "react";
import PropTypes from "prop-types";
import {StyleSheet, Text, TouchableHighlight, View} from "react-native";

class VoteButton extends Component {
    vote = () => {
        this.props.vote(this.props.number);
    }
    render() {
        const {number} = this.props;
        return (
            <TouchableHighlight onPress={this.vote} underlayColor="white">
                <View style={styles.container}>
                    <Text>{ number }</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

VoteButton.propTypes = {
    number: PropTypes.number.isRequired,
    vote: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 140,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#aaf',
    },
});

export default VoteButton;