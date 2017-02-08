/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tabs from 'react-native-tabs';

export default class saseumn extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 'events' };
  }
  render() {
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} style={{ backgroundColor: 'white' }}
          selectedStyle={{ color: 'red' }} onSelect={el => this.setState({ page: el.props.name })}>
          <Text name="events">Events</Text>
          <Text name="updates">Updates</Text>
        </Tabs>
        <Text style={styles.welcome}>
          Welcome to SASE UMN!
          </Text>
        <Text style={styles.instructions}>
          Selected page: {this.state.page}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('saseumn', () => saseumn);
