import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ManagementScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          paddingHorizontal: 20,
          backgroundColor: 'green',
          paddingTop: 30,
        }}>
        <Text>List of workouts</Text>
      </View>

      <View style={{ height: 44 }}>
        <Text>Create workout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
