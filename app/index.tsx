// components/LandingView.tsx
import React, { useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import EventCard , { EventCardProps } from '../components/LandingComponent/EventCard';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import rf from '../Utils/functions/responsiveFontSize';
import withSafeAreaWrapper from '../Utils/decorators/withSafeAreaView';
import ProtectedRoute from '../Utils/components/ProtectedRoute';
import Sidebar from '../components/LandingComponent/Sidebar';
import uuid from "react-native-uuid"
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
// You can replace this with the actual user avatar URL
const userAvatar = 'https://picsum.photos/' + 2;

const LandingView = () => {
  // Replace this with actual fetched events
  const router=useRouter()
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const categories:number[]= [1,2]
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
        <HighlightCarousel highlightedEvent={events}/>
        <ScrollView>
        {categories.map((category, index) =><CategoryCarousel key={events[0].eventTitle+index+category} events={events}/>)}
        </ScrollView>
        <Button onPress={()=>router.push("/event/create-event")}>To Create Event</Button>
      </View>
      <Modal animationType="slide" transparent={true} visible={sidebarVisible}>
        <TouchableOpacity style={styles.modalOverlay} onPress={closeSidebar} />
        <Sidebar onClose={closeSidebar} />
      </Modal>
    </ProtectedRoute>
  );
};

const HighlightCarousel=({highlightedEvent}:{highlightedEvent:EventCardProps[]})=>(
<ScrollView horizontal>
  {highlightedEvent.map((highlightEvent)=>(
  <View style={styles.highlightedEvent} key={highlightEvent.eventTitle+uuid.v4()}>
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
)


const CategoryCarousel=({events})=>(
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
)

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

export default withSafeAreaWrapper(LandingView);
