import React from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimatedBoxes = () => {
  const offset = useSharedValue(0);
  const rotate = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value * 255 }],
  }));

  const rotationAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotate.value}deg` }],
  }));

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />

      <Button
        title="Move"
        onPress={() => {
          cancelAnimation(offset);
          offset.value = withTiming(Math.random());
        }}
      />

      <Button
        title="Spring Move"
        onPress={() => {
          cancelAnimation(offset);
          offset.value = withSpring(Math.random());
        }}
      />

      <Animated.View style={[styles.box, rotationAnimatedStyles]} />

      <Button
        title="Rotate"
        onPress={() => {
          cancelAnimation(rotate);
          rotate.value = withSequence(
            withRepeat(withTiming(90, { duration: 500 }), 4),
            withTiming(0, { duration: 500 }),
          );
        }}
      />

      <Button
        title="Wobble"
        onPress={() => {
          cancelAnimation(rotate);
          rotate.value = withSequence(
            withTiming(-10, { duration: 50 }),
            withRepeat(withTiming(10, { duration: 100 }), 6, true),
            withTiming(0, { duration: 50 }),
          );
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'blue',
    marginBottom: 20,
  },
});

export default AnimatedBoxes;
