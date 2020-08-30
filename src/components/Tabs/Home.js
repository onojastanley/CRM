import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";



class Home extends Component {

   

    render() {
        return (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
            
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});