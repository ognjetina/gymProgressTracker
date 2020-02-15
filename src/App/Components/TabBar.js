import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationRouts } from '../Navigation/NavigationRoutes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from './Colors';

export const TabBar = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.PRIMARY,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <TouchableOpacity
        style={styles.navBarButton}
        onPress={() => navigation.navigate(NavigationRouts.PRACTICE)}>
        <Icon
          name={'dumbbell'}
          color={navigation.state.index === 0 ? Colors.ACTIVE : Colors.INACTIVE}
          size={30}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navBarButton, { alignItems: 'flex-start' }]}
        onPress={() => navigation.navigate(NavigationRouts.SUMMARY)}>
        <Icon
          name={'chart-line'}
          color={navigation.state.index === 1 ? Colors.ACTIVE : Colors.INACTIVE}
          size={30}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navBarButton, { alignItems: 'flex-end' }]}
        onPress={() => navigation.navigate(NavigationRouts.MANAGEMENT_STACK)}>
        <Icon
          name={'bulletin-board'}
          color={navigation.state.index === 2 ? Colors.ACTIVE : Colors.INACTIVE}
          size={30}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navBarButton, { alignItems: 'flex-end' }]}
        onPress={() => navigation.navigate(NavigationRouts.SETTINGS)}>
        <Icon
          name={'settings'}
          color={navigation.state.index === 3 ? Colors.ACTIVE : Colors.INACTIVE}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarButton: {
    flex: 1,
    justifyContent: 'center',
  },
});
