/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class Input extends Component {
  state = {
    myTextInput: '',
  };

  onChangeInput = (text) => {
    this.setState({
      myTextInput: text,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          style={styles.input}
          value={this.state.myTextInput}
          onChangeText={this.onChangeInput}
          maxLength={100}
          //? 자동 개행이 된다.
          multiline={true}
          //? 대문자 자동수정을 막는다.
          autoCapitalize={'none'}
          //? disabled 기능
          editable={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#ddd',
    fontSize: 25,
    padding: 10,
  },
});

export default Input;
