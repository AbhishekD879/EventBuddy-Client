// components/LandingView.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import EventCard, { EventCardProps } from '../components/LandingComponent/EventCard';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import rf from '../Utils/functions/responsiveFontSize';
import ProtectedRoute from '../Utils/components/ProtectedRoute';
import uuid from 'react-native-uuid';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
// You can replace this with the actual user avatar URL

const LandingView = () => {
  // Replace this with actual fetched events
  const router = useRouter();

  const categories: number[] = [1, 2];
  const events = [
    {
      id: 1,
      eventTitle: 'Event Title 1',
      eventDescription: 'Event Description 1',
      eventCover: 'https://example.com/event-cover-1.jpg',
      currentContribution: 500,
      goalAmount: 1000,
    },
    {
      id: 2,
      eventTitle: 'Event Title 2',
      eventDescription: 'Event Description 2',
      eventCover: 'https://picsum.photos/' + 2,
      currentContribution: Math.floor(Math.random() * (1500 + 1)),
      goalAmount: 1500,
    },
    {
      id: 3,
      eventTitle: 'Event Title 2',
      eventDescription: 'Event Description 2',
      eventCover: 'https://picsum.photos/' + 3,
      currentContribution: Math.floor(Math.random() * (1500 + 1)),
      goalAmount: 1500,
    },
    {
      id: 4,
      eventTitle: 'Event Title 2',
      eventDescription: 'Event Description 2',
      eventCover: 'https://picsum.photos/' + 4,
      currentContribution: Math.floor(Math.random() * (1500 + 1)),
      goalAmount: 1500,
    },
    {
      id: 5,
      eventTitle: 'Event Title 2',
      eventDescription: 'Event Description 2',
      eventCover: 'https://picsum.photos/' + 5,
      currentContribution: Math.floor(Math.random() * (1500 + 1)),
      goalAmount: 1500,
    },
    {
      id: 6,
      eventTitle: 'Event Title 2',
      eventDescription: 'Event Description 2',
      eventCover: 'https://picsum.photos/' + 6,
      currentContribution: Math.floor(Math.random() * (1500 + 1)),
      goalAmount: 1500,
    },

    // ... more events
  ];

  return (
    <ProtectedRoute>
      <View style={styles.container}>
        <HighlightCarousel highlightedEvent={events} />
        <ScrollView>
          {categories.map((category, index) => (
            <CategoryCarousel key={events[0].eventTitle + index + category} events={events} />
          ))}
        </ScrollView>
      </View>
    </ProtectedRoute>
  );
};

const HighlightCarousel = ({ highlightedEvent }: { highlightedEvent: EventCardProps[] }) => (
  <ScrollView horizontal>
    {highlightedEvent.map((highlightEvent) => (
      <View style={styles.highlightedEvent} key={highlightEvent.eventTitle + uuid.v4()}>
        {/* You can replace this with the actual highlighted global event data */}
        <EventCard
          eventTitle="Highlighted Event"
          eventDescription="Highlighted Event Description"
          eventCover="https://example.com/highlighted-event-cover.jpg"
          currentContribution={1000}
          goalAmount={2000}
        />
      </View>
    ))}

    {/* Add more carousels for other categories */}
  </ScrollView>
);

const CategoryCarousel = ({ events }) => (
  <View style={styles.carouselContainer}>
    <Text style={styles.categoryTitle}>Category 1</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {events.map((event) => (
        <EventCard
          key={event.id}
          eventTitle={event.eventTitle}
          eventDescription={event.eventDescription}
          eventCover={event.eventCover}
          currentContribution={event.currentContribution}
          goalAmount={event.goalAmount}
        />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F0F0F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingTop: hp(5),
    paddingBottom: hp(1),
    backgroundColor: '#407BFF',
  },
  appName: {
    fontSize: rf(16),
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userAvatar: {
    width: wp(9),
    height: wp(9),
    borderRadius: wp(5),
  },
  highlightedEvent: {
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
  carouselContainer: {
    paddingTop: hp(2),
  },
  categoryTitle: {
    fontSize: rf(16),
    fontWeight: 'bold',
    color: '#407BFF',
    paddingHorizontal: wp(4),
    marginBottom: hp(1),
  },
});

export default LandingView;
