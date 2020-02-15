import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import { Button, Colors, Header } from '../../Components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const WorkoutCRUDScreen = ({ navigation }) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  return (
    <View style={styles.container}>
      <Header label={'WORKOUT'} />

      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Title</Text>
        <TextInput
          value={title}
          style={styles.inputField}
          onChangeText={title => setTitle(title)}
        />

        <Text style={styles.inputLabel}>Description</Text>
        <TextInput
          value={description}
          multiline={true}
          numberOfLines={4}
          style={styles.inputField}
          onChangeText={description => setDescription(description)}
        />

        <Button label={'SAVE'} />
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name={'chevron-left'} color={Colors.ACTIVE} size={42} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 32,
    alignSelf: 'stretch',
    paddingTop: 32,
  },
  inputLabel: {
    color: Colors.PRIMARY,
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputField: {
    marginTop: 4,
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'stretch',
    paddingLeft: 32,
    marginBottom: 36,
  },
  backButton: {
    height: 42,
    width: 62,
    borderRadius: 14,
    position: 'absolute',
    bottom: 16,
    right: 28,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
