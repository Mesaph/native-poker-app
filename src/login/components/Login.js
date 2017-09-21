import React, {Component} from "react";
import PropTypes from "prop-types";
import {Button, StyleSheet, TextInput, Picker, View, Dimensions} from "react-native";

class Login extends Component {
    componentWillMount() {
        this.props.requestAvailableSessions();
    }

    render() {
        const {name, sessionId, setName, setSessionId, login, sessions } = this.props;

        const items = sessions.map(session => (
            <Picker.Item label={session.name} key={session.id} value={session.id} />
        ));

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.name}
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                />
                <Picker
                    style={styles.sessionId}
                    selectedValue={sessionId}
                    onValueChange={setSessionId}>
                    { items }
                </Picker>
                <Button
                    onPress={login}
                    title="Login"
                />
            </View>
        );
    }
}

Login.propTypes = {
    name: PropTypes.string.isRequired,
    sessionId: PropTypes.number,
    setName: PropTypes.func.isRequired,
    setSessionId: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    requestAvailableSessions: PropTypes.func.isRequired,
};

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        name: {
            height: 40,
            marginBottom: 20,
            width: Dimensions.get('window').width*0.9,
            textAlign: 'center',
        },
        sessionId: {
            marginBottom: 20,
            width: Dimensions.get('window').width*0.9,
        },
    });

export
default
Login;
