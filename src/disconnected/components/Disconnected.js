import React, {Component} from "react";
import PropTypes from "prop-types";
import {Dimensions, StyleSheet, TextInput, View } from "react-native";

class Disconnected extends Component {
    constructor(props) {
        super(props);

        this.interval = null;
    }

    componentWillMount() {
        this.props.initWebsocket();
        this.interval = setInterval(this.props.initWebsocket, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {host, setHost} = this.props;
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.host}
                    placeholder="Host"
                    value={host}
                    onChangeText={setHost}
                />
            </View>
        );
    }
}

Disconnected.propTypes = {
    host: PropTypes.string.isRequired,
    setHost: PropTypes.func.isRequired,
    initWebsocket: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    host: {
        height: 40,
        marginBottom: 20,
        width: Dimensions.get('window').width * 0.9,
        textAlign: 'center',
    },
});

export default Disconnected;
