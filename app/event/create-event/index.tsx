import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title, Paragraph,  FAB } from 'react-native-paper';
import DatePicker from "react-native-date-picker"
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import withSafeAreaWrapper from '../../../Utils/decorators/withSafeAreaView';
const NewEventForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const [goalAmount, setGoalAmount] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Date:', date);
    console.log('Location:', location);
    console.log('Goal Amount:', goalAmount);
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Create New Event</Title>
      <Paragraph style={styles.paragraph}>Enter the event details below:</Paragraph>
      <TextInput
        label="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        mode="outlined"
        multiline
      />
      <DatePicker
        mode="date"
        date={date}
        onDateChange={setDate}
        style={styles.input}
      />
      <TextInput
        label="Location"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Goal Amount"
        value={goalAmount}
        onChangeText={setGoalAmount}
        style={styles.input}
        mode="outlined"
        keyboardType="numeric"
        // left={<TextInput.Icon icon={()=><Icon name="currency-rupee" size={24} color="#407BFF" />}/>} // Add currency symbol here
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.submitButton}
      >
        Create Event
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    marginBottom: 8,
  },
  paragraph: {
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  submitButton: {
    marginTop: 8,
  },
});

export default withSafeAreaWrapper(NewEventForm);
