/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const Header = (props) => {
  return (
    <>
      <TouchableWithoutFeedback
        // TouchableWithoutFeedback - 이벤트가 작동할때 View에 효과가 미적용되며 작동,
        // 단 이때 view에 아무런 효과를 적용하지 않기 때문에 view 컴포넌트에 style을 넣어줘야된다
        onPress={() => alert('hello world')}>
        <View style={styles.header}>
          <Text>{props.name}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableOpacity
        // TouchableOpacity - 이벤트가 작동할때 View에 opacity가 적용되며 작동,
        // view에 효과가 적용되어 작동하므로 View 컴포넌트가 아닌 TouchableOpacity 컴포넌트에 직접 스타일을 삽입
        style={styles.header}
        // 웹에서의 click 또는 touch 이벤트와 비슷하게 동작
        // onPress={() => alert('hello world')}

        // 길게 눌렀을때 이벤트 발생
        // onLongPress={() => alert('hello world')}

        // 누르자마자 즉각적인 이벤트 발생
        // onPressIn={() => alert('hello world')}

        // 터치가 끝날때 이벤트 발생
        onPressOut={() => alert('hello world')}>
        <View>
          <Text>{props.name}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Header;
