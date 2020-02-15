import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../../Components';
import { NavigationRouts as Routes } from '../../Navigation/NavigationRoutes';
import { DatabaseContext } from '../../Data/DatabaseContext';

export const PracticeScreen = ({ navigation }) => {
  [workouts, setWorkouts] = useState([]);
  const databaseContext = useContext(DatabaseContext);

  const scrollY = new Animated.Value(0);

  useEffect(() => {
    databaseContext.getWorkouts().then(result => {
      setWorkouts(result);
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>WORKOUTS</Text>
      </View>

      {workouts && workouts.length > 0 ? (
        <ScrollView
          style={styles.scrollViewContainer}
          onScroll={event =>
            scrollY.setValue(event.nativeEvent.contentOffset.y)
          }>
          <View style={{ paddingBottom: 24 }}>
            {workouts &&
              workouts.map(workout => {
                return (
                  <View key={workout.id} style={styles.cardContainer}>
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
          </View>
        </ScrollView>
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ marginBottom: 16, color: Colors.PRIMARY }}>
            There are no workouts currently defined
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate(Routes.MANAGEMENT)}>
            <Text style={{ color: Colors.PRIMARY, fontWeight: 'bold' }}>
              Add workouts
            </Text>
          </TouchableOpacity>
        </View>
      )}
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
    borderBottomWidth: 1,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
  },
  scrollViewContainer: {
    flex: 1,
    alignSelf: 'stretch',
    paddingTop: 16,
    borderColor: Colors.PRIMARY,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: Colors.INACTIVE,
    height: 140,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 10,
    marginTop: 4,
    borderRadius: 16,
    padding: 16,
    shadowColor: Colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
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
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: Colors.ACTIVE,
    borderRadius: 6,
    shadowColor: Colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});
