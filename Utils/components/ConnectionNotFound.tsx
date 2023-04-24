import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import SVGFallback from './SVGFallback';
import dimensionConstants from '../../constantConfig';
import ConnectionErrorSvg from './ConnectionErrorSVG';

const ConnectionNotFound = () => {
  return (
    <>
    {/* <SVGFallback>
      <ConnectionErrorSvg />
    </SVGFallback> */}
    <View style={styles.container}>
      <Text style={styles.text}>Connection Not Found</Text>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ConnectionNotFound;
