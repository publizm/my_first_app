/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text>{props.name}</Text>
    </View>
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
