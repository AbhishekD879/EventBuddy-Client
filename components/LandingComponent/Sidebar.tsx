// components/Sidebar.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import responsiveFontSize from '../../Utils/functions/responsiveFontSize';
import { supabase } from '../../suprabase.config';
import { useRouter } from 'expo-router';
import { useLoading } from '../../Utils/components/LoadingContext';
interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const { withLoading } = useLoading();
  const router = useRouter();
  const handleLogout = async () => {
    // Add your logout logic here
    withLoading(() => supabase.auth.signOut());
    router.push('/login');
    onClose();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 32,
    width: wp(70),
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
  },
  logoutText: {
    fontSize: responsiveFontSize(18),
    color: '#407BFF',
  },
});

export default Sidebar;
