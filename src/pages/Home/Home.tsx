import React from 'react';
import { StyleSheet, ScrollView, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ParamList } from '../../navigation/ParamTypes';

type Props = {
  navigation: NativeStackNavigationProp<ParamList>;
};

const Home = ({ navigation }: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button
        title="Animated Boxes"
        onPress={() => navigation.navigate('Box')}
      />

      <Button
        title="Animated Circles"
        onPress={() => navigation.navigate('Circle')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
  },
  btn: {
    marginBottom: 20,
  },
});

export default Home;
