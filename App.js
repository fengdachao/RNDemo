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
  Alert
} from 'react-native';

import UXView from './src/UXView'

const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Page Title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
</head>
<body>
  <div id="root" style="width: 100%; height: 100%; position: absolute; overflow: hidden;">
      <div class="spinner">
          <div class="bounce1">&nbsp;</div>
          <div class="bounce2">&nbsp;</div>
          <div class="bounce3">&nbsp;</div>
      </div>
  </div>
  <script charset="UTF-8">
    fetch('/resource/index.html')
    .then((res) => {
      alert('success');
    })
    .catch(() => {
      alert('error');
    })
  </script>
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // uri: 'http://10.49.58.19:8080/MX3.0-daily',
      uri: 'http://10.49.58.19:8080/MX2.3-release',
      // uri: 'http://www.google.com/',
      // uri: 'https://github.com/facebook/react-native'
    };
    this.onBrowser = this.onBrowser.bind(this);
    this.onChangeText = this.onChangeText.bind(this);

    // const assets = require('./assets/html');
    // alert(assets);
    this.log('app contructure');
  }

  onBrowser() {
    Alert.alert('click brower');
    this.setState({
      uri: this.state.uri
    });
    this.log('click browser.');
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
        // uri: 'http://10.49.58.19:8080/MX2.3-release',
        uri: 'file:///hello.html',
        // baseUrl: 'http://localhost:8088/assets/',
        // html: html,
      }
    }
    console.log(require('./hello.html'));
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
        <WebView {...viewProps} />
      </View>
    );
  }
}

const uxCfg = {
  mixedContentMode: 'never',
  thirdPartyCookiesEnabled: false,
  allowUniversalAccessFromFileURLs: true,
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  input: {
    width: '100%',
  }
});
