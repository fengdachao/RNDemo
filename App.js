/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  WebView,
  View,
  Alert,
  ActivityIndicator
} from 'react-native';

import UXView from './src/UXView'

const consolePrefix = '####webview::'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: 'http://10.49.58.15:8080/MX2.3-MR1/',
      // uri: 'http://10.49.58.15:8080/MX2.3-release',
      // uri: 'http://www.google.com/',
      // uri: 'https://github.com/facebook/react-native',
      isLoading: true,
    };
    this.onBrowser = this.onBrowser.bind(this);
    this.onChangeText = this.onChangeText.bind(this);

    // const assets = require('./assets/html');
    // alert(assets);
  }

  onBrowser() {
    this.setState({
      uri: this.state.uri
    });
  }

  onChangeText(v) {
    this.setState({
      uri: v
    })
  }

  init() {
    alert('inject');
  }

  log(info) {
    fetch('http://10.37.2.31:3001/log/info', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({"r": "hello"})
    })
    .then(res => {
      console.log(res.body);
    })
    .catch(e => {
      console.log(e);
    })
  }

  render() {
    const viewProps = {
      source: {
        uri: this.state.uri,
        // uri: 'file:///hello.html',
        // baseUrl: 'http://localhost:8088/assets/',
        // html: html,
      },
      onLoad: () => {
        console.log(`${consolePrefix} page onload`);
        this.setState({
          isLoading: true
        })
      },
      onLoadEnd: () => {
        console.log(`${consolePrefix} page onload end`);
        this.setState({
          isLoading: false
        })
      },
      onError: (e) => {
        console.log(`${consolePrefix} page onload error,${error}`);
        this.setState({
          isLoading: false
        })
      },
      thirdPartyCookiesEnabled: true,
      // startInLoadingState: true,
      // renderLoading: () => {
      //   return <ActivityIndicator size="small" color="#00ff00" />;
      // }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          uri path:
        </Text>
        <TextInput
          style={styles.input}
          editable
          multiline={false}
          defaultValue={this.state.uri}
          onChangeText={this.onChangeText}
        />
        <Button
          title='Browser'
          onPress={this.onBrowser}
        />
        <ActivityIndicator animating={this.state.isLoading} size="small" color="#00ff00" />
        <WebView style={styles.content} {...viewProps} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    
  },
  content: {
    flexGrow: 2,
    flexShrink: 1,
    flexBasis: '100%',
    // width: '100%',
  },
  indicator: {
    
  }
});
