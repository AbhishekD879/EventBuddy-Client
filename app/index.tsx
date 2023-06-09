// components/LandingView.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import EventCard from './component/EventCard';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import rf from '../Utils/functions/responsiveFontSize';
import withSafeAreaWrapper from '../Utils/decorators/withSafeAreaView';
import ProtectedRoute from '../Utils/components/ProtectedRoute';
import Sidebar from './component/Sidebar';

// You can replace this with the actual user avatar URL
const userAvatar = 'https://picsum.photos/' + 2;

const LandingView = () => {
  // Replace this with actual fetched events
  const [sidebarVisible, setSidebarVisible] = useState(false);
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
  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <ProtectedRoute>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.appName}>EventBuddy</Text>
          <TouchableOpacity onPress={() => setSidebarVisible(true)}>
            <Image source={{ uri: userAvatar }} style={styles.userAvatar} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.highlightedEvent}>
            {/* You can replace this with the actual highlighted global event data */}
            <EventCard
              eventTitle="Highlighted Event"
              eventDescription="Highlighted Event Description"
              eventCover="https://example.com/highlighted-event-cover.jpg"
              currentContribution={1000}
              goalAmount={2000}
            />
          </View>
          <View style={styles.carouselContainer}>
            <Text style={styles.categoryTitle}>Category 1</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {events.map(event => (
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
          {/* Add more carousels for other categories */}
        </ScrollView>
      </View>
      <Modal animationType="slide" transparent={true} visible={sidebarVisible}>
        <TouchableOpacity style={styles.modalOverlay} onPress={closeSidebar} />
        <Sidebar onClose={closeSidebar} />
      </Modal>
    </ProtectedRoute>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F0F0F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingTop: hp(5),
    paddingBottom: hp(2),
    backgroundColor: '#407BFF',
  },
  appName: {
    fontSize: rf(18),
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userAvatar: {
    width: wp(10),
    height: wp(10),
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
    fontSize: rf(18),
    fontWeight: 'bold',
    color: '#407BFF',
    paddingHorizontal: wp(4),
    marginBottom: hp(1),
  },
});

export default withSafeAreaWrapper(LandingView);
