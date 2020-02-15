import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from './Colors';

export const Header = ({ label }) => {
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.titleText}>{label}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	titleContainer: {
		marginTop:24,
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
});


