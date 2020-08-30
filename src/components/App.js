import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/PeopleReducer';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './Navigation'
const Stack = createStackNavigator();
const store = createStore(reducers);
type Props = {};
export default class App extends Component<Props> {
  render() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
	   <Stack.Screen
        name="Home"
        component={Navigation}
        options={{
           headerLeft: () => (
             <Icon name="home" style={styles.icon}></Icon>),
        title: <Text style={styles.instagram}>CRM</Text>,
        
        }}
      />
       
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
      }
}


const styles = StyleSheet.create({
	    icon: {
  
    fontSize: 40,
	borderColor: "black",
	paddingLeft: 10
  },
    instagram: {
    fontFamily: "almendra-700italic",
    color: "#121212",
    fontSize: 32,
    
  },
    icon2: {
    fontSize: 40,
    height: 41,
    width: 40,
    marginLeft: 517,
    marginTop: 11
  },
  
});