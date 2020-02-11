import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export default class WorkoutModel extends Model {
  static table = 'workouts';

  @field('id') id;
  @field('name') name;
  @field('description') description;

  getWorkout() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
    };
  }
}
