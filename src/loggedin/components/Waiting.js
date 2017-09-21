import React, {Component} from "react";
import {Text, View} from "react-native";

import Progress from "./Progress";

class Waiting extends Component {
    render() {
        return (
            <View>
                <Text>Waiting</Text>
                { this.props.progress !== 0 &&
                <Progress progress={this.props.progress}/>
                }
            </View>
        );
    }
}
export default Waiting;
