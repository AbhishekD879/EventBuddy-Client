import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

interface CustomStepIndicatorProps {
  step: number;
  totalSteps: number;
}

const CustomStepIndicator: React.FC<CustomStepIndicatorProps> = ({ step, totalSteps }) => {
  const lineProgress = useRef(
    Array.from({ length: totalSteps - 1 }, () => new Animated.Value(0))
  ).current;

  useEffect(() => {
    if (step > 1) {
      Animated.timing(lineProgress[step - 2], {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [step]);

  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }, (_, index) => (
        <React.Fragment key={index}>
          {index !== 0 && (
            <View style={styles.connectorLine}>
              <Animated.View
                style={[
                  styles.activeLine,
                  {
                    width: lineProgress[index - 1].interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0%', '100%'],
                    }),
                  },
                ]}
              />
            </View>
          )}
          <View
            style={[
              styles.indicator,
              index < step ? styles.activeIndicator : styles.inactiveIndicator,
            ]}>
            <Text style={styles.indicatorText}>{index + 1}</Text>
          </View>
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  indicator: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  activeIndicator: {
    backgroundColor: '#407BFF',
  },
  inactiveIndicator: {
    backgroundColor: '#CCCCCC',
  },
  indicatorText: {
    color: 'white',
    fontWeight: 'bold',
  },
  connectorLine: {
    height: 2,
    flexGrow: 1,
    backgroundColor: '#CCCCCC',
    overflow: 'hidden',
  },
  activeLine: {
    height: 2,
    backgroundColor: '#407BFF',
  },
});

export default CustomStepIndicator;
