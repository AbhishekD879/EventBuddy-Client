// components/EventCard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import responsiveFontSize from '../../Utils/functions/responsiveFontSize';
interface EventCardProps {
  eventTitle: string;
  eventDescription: string;
  eventCover: string;
  currentContribution: number;
  goalAmount: number;
}
const EventCard: React.FC<EventCardProps> = ({
  eventTitle,
  eventDescription,
  eventCover,
  currentContribution,
  goalAmount,
}) => {
  const progress = (currentContribution / goalAmount) * 100;

  return (
    <View style={styles.container}>
      <Image source={{ uri: eventCover }} style={styles.coverImage} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{eventTitle}</Text>
        <Text style={styles.description}>{eventDescription}</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(45),
    marginHorizontal: wp(2),
    backgroundColor: '#fff',
    borderRadius: wp(2),
    overflow: 'hidden',
    position: 'relative',
    // Add the following styles for shadow
    elevation: 5, // for Android
    shadowColor: '#000', // for iOS
    shadowOffset: { width: 0, height: 2 }, // for iOS
    shadowOpacity: 0.25, // for iOS
    shadowRadius: 3.84, // for iOS
  },
  coverImage: {
    width: '100%',
    height: hp(15),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    padding: wp(2),
  },
  title: {
    fontSize: responsiveFontSize(14),
    fontWeight: 'bold',
    color: '#407BFF',
  },
  description: {
    fontSize: responsiveFontSize(14),
    color: '#333',
  },
  progressBarContainer: {
    height: hp(0.7),
    backgroundColor: '#eee',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#407BFF',
  },
});

export default EventCard;
export { EventCardProps };
