import React, {Component} from "react";
import PropTypes from "prop-types";
import {Text, StyleSheet, View } from "react-native";

import Voting from './Voting';
import Waiting from './Waiting';

class Loggedin extends Component {
    render() {
        const {clientNames, voting, vote} = this.props;

        return (
            <View style={styles.container}>
                <Text> { clientNames.length} Teilnehmer </Text>
                { voting ? <Voting vote={vote} /> : <Waiting /> }
            </View>
        );
    }
}

Loggedin.propTypes = {
    clientNames: PropTypes.array.isRequired,
    voting: PropTypes.bool.isRequired,
    vote: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40,
    },
});

export default Loggedin;
