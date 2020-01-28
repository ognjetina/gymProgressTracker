import React, { useState } from 'react';
import { View, Picker, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../Components';


export const PracticeScreen = ({ navigation }) => {

	const [workout, setWorkout] = useState();

	const workouts = [
		'Deadlift', 'Squat', 'Biceps curl', 'Bench press', 'Leg curl', 'Bent over row', 'Shoulder Press'
	];

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

			<View
				style={{
					height: 40,
					width: 300,
					backgroundColor: Colors.INACTIVE,
					justifyContent: 'center',
					borderRadius: 20,
					paddingLeft: 10,
					marginBottom: 80
				}}>

				<Picker selectedValue={workout} onValueChange={value => {
					setWorkout(value)
				}}>
					{
						workouts.map(workout => {
							return <Picker.Item key={workout} label={workout} value={workout} color={Colors.PRIMARY} />
						})
					}
				</Picker>

			</View>
			<TouchableOpacity style={{
				height: 40,
				width: 300,
				backgroundColor: Colors.PRIMARY,
				alignItems: 'center',
				justifyContent: 'center',
				borderRadius: 20,
			}}>
				<Text style={{ fontSize: 24, fontWeight: 'bold', color: Colors.WHITE }}>Start workout</Text>
			</TouchableOpacity>
		</View>
	)
}