import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    var navigationView = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left', padding: 50 }}>I'm in the Drawer.</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>Hello</Text>
          <Text style={{ margin: 10, fontSize: 15, textAlign: 'right' }}>World!</Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => SectionListBasics);
