/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const NumList = (props) => {
  return (
    <View style={styles.numList}>
      {props.numbers.map((num, idx) => (
        <TouchableOpacity
          style={styles.numItem}
          key={idx}
          onPress={() => props.onNumDelete(idx)}>
          <Text>{num}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  numList: {
    alignItems: 'center',
    padding: 5,
    marginTop: 5,
    width: '100%',
  },
  numItem: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
    backgroundColor: '#eee',
  },
});

export default NumList;
