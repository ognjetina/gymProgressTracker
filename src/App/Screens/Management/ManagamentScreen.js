import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Colors, Header } from '../../Components';

export const ManagementScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header label={'MANAGAMENT'} />
      <View style={{ flex: 1 }}>
        <Text>Your list of workouts is empty</Text>
      </View>

      <View style={{ height: 60 }}>
        <View>
          <Button
            label={'CREATE WORKOUT '}
            onPress={() => navigation.navigate('WORKOUT_CRUD')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND
  },
});
