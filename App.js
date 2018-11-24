/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';

// eslint-disable-next-line no-undef
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text={'Rolling Stone\'s Top 500'} />
        <View style={styles.body}>
          <AlbumList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  body: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 40
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
