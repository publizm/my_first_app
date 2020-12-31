/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';

class App extends Component {
  state = {
    appName: 'My first App',
    random: [36, 999],
  };

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState((prevState) => ({
      random: [...prevState.random, randomNum],
    }));
  };

  onNumDelete = (idx) => {
    const changedRandom = this.state.random.filter(
      (random, index) => index !== idx,
    );

    this.setState((prevState) => ({
      random: changedRandom,
    }));
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Header name={this.state.appName} />
        <View>
          {/* touch 이벤트는 Text 컴포넌트에서도 작동이 가능하다. */}
          <Text
            style={styles.mainText}
            onPress={() => alert('text touch event')}>
            hello world
          </Text>
        </View>
        <ScrollView
          style={{width: '100%'}}
          //? 스크롤하고 난 후 손을 떼었을때 trigger
          // onMomentumScrollBegin={() => alert('begin')}
          //? 스크롤 바운스가 멈췄을때 trigger
          // onMomentumScrollEnd={() => alert('end')}
          //? 스크롤 움직이자마자 trigger
          // onScroll={() => alert('scrolling')}
          //? 스크롤뷰가 사이즈가 변경되었을때 trigger 인자로는 스크롤뷰의 width와 height값을 전달해준다.
          // onContentSizeChange={(width, height) => {
          //   alert(height);
          // }}
          //? ios에서 스크롤 끝에서 스크롤을 실행할때 bounce 효과설정
          bounces={false}>
          <Generator onAddRandomNum={this.onAddRandomNum} />
          <NumList onNumDelete={this.onNumDelete} numbers={this.state.random} />
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
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
});

export default App;
