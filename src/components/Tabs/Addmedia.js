import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";



class Addmedia extends Component {

   

    render() {
        return (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Addmedia!</Text>
    </View>
            
        );
    }
}
export default Addmedia;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});