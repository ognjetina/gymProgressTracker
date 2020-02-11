import React, {userRef} from 'react';
import {View, ScrollView, Text, StyleSheet, Animated} from 'react-native';
import {Colors} from '../../Components';

export const PracticeScreen = ({navigation}) => {
  const workouts = [
    {
      name: 'Deadlift',
      iconName: 'arrow',
      description:
        'This is a nice description, what this workout is good for! ' +
        'This is a nice description, what this workout is good for!',
    },
    {
      name: 'Squat',
      iconName: 'arrow',
      description: 'This is a nice description, what this workout is good for!',
    },
    {
      name: 'Biceps curl',
      iconName: 'arrow',
      description: 'This is a nice description, what this workout is good for!',
    },
    {
      name: 'Bench press',
      iconName: 'arrow',
      description: 'This is a nice description, what this workout is good for!',
    },
    {
      name: 'Leg curl',
      iconName: 'arrow',
      description: 'This is a nice description, what this workout is good for!',
    },
    {
      name: 'Bent over row',
      iconName: 'arrow',
      description: 'This is a nice description, what this workout is good for!',
    },
    {
      name: 'Shoulder Press',
      iconName: 'arrow',
      description: 'This is a nice description, what this workout is good for!',
    },
  ];

  const scrollY = new Animated.Value(0);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>WORKOUTS</Text>
      </View>

      <ScrollView
        style={styles.scrollViewContainer}
        onScroll={event => scrollY.setValue(event.nativeEvent.contentOffset.y)}>
        {workouts.map(workout => {
          return (
            <View key={workout.name} style={styles.cardContainer}>
              <View style={styles.cardBodyContainer}>
                <View>
                  <Text style={styles.cardTitle}>{workout.name}</Text>
                </View>
                <View style={styles.cardDescriptionContainer}>
                  <Text style={styles.cardDescriptionText}>
                    {workout.description}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 24,
    alignSelf: 'stretch',
  },
  titleContainer: {
    marginBottom: 8,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
	  borderBottomWidth: 1
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
  },
  scrollViewContainer: {
    flex: 1,
    alignSelf: 'stretch',
    paddingHorizontal: 32,
    paddingTop: 26,
    borderColor: Colors.PRIMARY,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: Colors.INACTIVE,
    height: 140,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    borderRadius: 16,
    padding: 16,
  },
  cardImage: {
    width: 100,
    height: '100%',
    alignSelf: 'flex-start',
  },
  cardBodyContainer: {
    flex: 3,
    alignSelf: 'stretch',
    paddingHorizontal: 14,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
  },
  cardDescriptionContainer: {
    flex: 1,
    paddingTop: 8,
  },
  cardDescriptionText: {
    color: Colors.PRIMARY,
  },
});
