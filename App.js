/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import PickerComponent from './src/picker';
class App extends Component {
  state = {
    myTextInput: '',
    alphabet: ['a', 'b', 'c', 'd'],
  };

  onChangeInput = (text) => {
    this.setState({
      myTextInput: text,
    });
  };

  onAddTextInput = () => {
    this.setState((prevState) => {
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput],
      };
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <PickerComponent />
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
        <Button title="Add Text Input" onPress={this.onAddTextInput} />
        <ScrollView style={{width: '100%'}}>
          {this.state.alphabet.map((item, index) => (
            <Text style={styles.mainText} key={index}>
              {item}
            </Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  mainText: {
    margin: 20,
    backgroundColor: 'pink',
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#ddd',
    fontSize: 25,
    padding: 10,
  },
});

export default App;
