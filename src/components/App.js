
import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/PeopleReducer';
import PeopleList from './PeopleList';

const store = createStore(reducers);


export default class App extends Component {
  render(){
  return (
    <Provider store={store}>
        <View style={styles.container}>
          <PeopleList />
        </View>
      </Provider>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
