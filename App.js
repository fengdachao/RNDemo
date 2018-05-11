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
  ActivityIndicator,
  NativeModules
} from 'react-native';

import UXView from './src/UXView';
import Notification from './src/Notification';

const consolePrefix = '####webview::'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: 'http://10.49.58.19:8080/MX3.0-release/index-tui.jsp',
      // uri: 'http://10.49.58.15:8080/MX2.3-release',
      // uri: 'http://www.google.com/',
      // uri: 'https://github.com/facebook/react-native',
      text: '',
      isLoading: true,
    };
    this.onBrowser = this.onBrowser.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    console.log(NativeModules);
  }

  componentDidUpdate() {
    console.log('update...');
  }

  componentDidMount() {
    console.log('mount...');
  }

  componentWillUnmount() {
    console.log('un mount...');
  }

  onBrowser() {
    this.setState({
      uri: this.state.text
    });
  }

  onChangeText(v) {
    this.setState({
      text: v
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
    console.log(NativeModules.DeviceMonitor);
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
        console.log(`${consolePrefix} page onload error,${e}`);
        this.setState({
          isLoading: false
        })
      },
      onMessage: (e) => {
        console.log(e.nativeEvent.data);
        Notification.localNotification({
          message: e.nativeEvent.data
        });
      },
      injectJavaScript: () => {
        return 'alert("alert");'
      },
      // injectedJavaScript: 'window.postMessage("message");alert("hello");',
      thirdPartyCookiesEnabled: true,
      // startInLoadingState: true,
      // renderLoading: () => {
      //   return <ActivityIndicator size="small" color="#00ff00" />;
      // }
    }
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>
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
        <ActivityIndicator animating={this.state.isLoading} size="small" color="#00ff00" /> */}
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
  },
  indicator: {
    
  }
});
