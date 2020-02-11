import React from 'react';

import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from '../Data/Schema';
import WorkoutModel from '../Data/WorkoutModel';

const adapter = new SQLiteAdapter({schema});

const database = new Database({
  adapter,
  modelClasses: [WorkoutModel],
  actionsEnabled: true,
});

export const DatabaseContext = React.createContext({});

export const DatabaseProvider = ({children}) => {
  const getWorkouts = async () => {
    const workoutsCollection = await database.collections.get('workouts');
    return await workoutsCollection.query().fetch();
  };

  return (
    <DatabaseContext.Provider
      value={{
        getWorkouts,
      }}>
      {children}
    </DatabaseContext.Provider>
  );
};
