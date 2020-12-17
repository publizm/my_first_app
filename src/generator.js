/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Generator = (props) => {
  return (
    <View style={styles.generator}>
      <Button
        // title - 버튼내 텍스트 노출(필수값)
        title="Add Number"
        onPress={() => props.onAddRandomNum()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#dedede',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Generator;
