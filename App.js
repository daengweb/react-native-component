/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

export default class App extends Component<{}> {
  state = {
    instruksi: false,
    loading: false
  }

  constructor(props) {
    super(props);
    this.instruksi = this.instruksi.bind(this);
  }

  instruksi() {
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({
        instruksi: true,
        loading: false
      })
    }, 5000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Instruksi belajar</Text>

        {
          this.state.loading ?
            <ActivityIndicator color="blue" size="small" animating /> : false
        }
        { this.state.instruksi ? 
          <Text style={styles.welcome}>
          Ini adalah instruksi belajar react native
          </Text>:
          <TouchableOpacity activeOpacity={0.5}>
            <Button title="Tampilkan" onPress={this.instruksi} />
          </TouchableOpacity>
        }
      </View>


      //<View style={styles.container}>
      //  <StatusBar animated translucent backgroundColor="red" barStyle="light-content"/>
      //  <Text style={styles.welcome} selectable onPress={() => alert('onpress')}
      //  >
      //    Welcome to React Native!{'\n'}
      //    Welcome
      //  </Text>

      //  <Image 
      //    style={{width: 50, height: 50}}
      //    resizeMode="contain"
      //    source={{ uri: 'https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/react-native/react-native.png' }}
      //  />

      //  <Text style={styles.welcome} numberOfLines={1} onLongPress={() => alert('longPress')}>
      //     Press Cmd+R to reload,{'\n'}
      //     Cmd+D or shake for dev menu
      //  </Text>
      //</View>
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
  }
});
