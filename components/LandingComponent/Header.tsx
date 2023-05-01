import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import rf from '../../Utils/functions/responsiveFontSize';
import React from 'react';
const userAvatar = 'https://picsum.photos/' + 2;
const Header = ({ setSidebarVisible }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.appName}>EventBuddy</Text>
      <TouchableOpacity onPress={() => setSidebarVisible(true)}>
        <Image source={{ uri: userAvatar }} style={styles.userAvatar} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
});
