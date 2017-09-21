import React, {Component} from "react";
import PropTypes from 'prop-types';
import {View, StyleSheet, ScrollView} from "react-native";

import VoteButton from './VoteButton';

const numbers = [0, 1, 2, 3, 5, 8, 13, 20];

class Voting extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    { numbers.map(number => (
                        <VoteButton number={number} key={number} vote={this.props.vote}/>
                    ))}
                </View>
            </ScrollView>
        );
    }
}

Voting.propTypes = {
    vote: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
});

export default Voting;