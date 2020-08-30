import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
 
    <Tab.Navigator
    initialRouteName="PeopleList"
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}
  >
    <Tab.Screen
      name="PeopleList"
      component={PeopleList}
      options={{
        tabBarLabel:() => {return null},
        tabBarIcon: ({ color, size }) => (
          <Icon name={'user'} size={50}  />
        ),
      }}
    />
    <Tab.Screen
      name="CompanyList"
      component={CompanyList}
      options={{
        tabBarLabel:() => {return null},
        tabBarIcon: ({ color, size }) => (
          <Icon name={'archive'} size={50} />
        ),
      }}
    />
    <Tab.Screen
      name="AddPerson"
      component={AddPerson}
      options={{
        tabBarLabel:() => {return null},
        tabBarIcon: ({ color, size }) => (
          <Icon name={'plus'} size={50}  />
        ),
      }}
    />
  </Tab.Navigator>
    
  );
}