import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const startingPosition = 100;

const AnimatedCircles = () => {
  const pressed = useSharedValue(false);
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);

  const ballPressStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? '#FEEF86' : '#001972',
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }));

  const onFirstBallPress = useAnimatedGestureHandler({
    onStart: (evt, ctx) => {
      pressed.value = true;
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (evt, ctx) => {
      x.value = ctx.startX + evt.translationX;
      y.value = ctx.startY + evt.translationY;
    },
    onEnd: (evt, ctx) => {
      pressed.value = false;
    },
  });

  return (
    <View>
      <PanGestureHandler onGestureEvent={onFirstBallPress}>
        <Animated.View style={[styles.ball, ballPressStyles]} />
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 30,
  },
});

export default AnimatedCircles;
