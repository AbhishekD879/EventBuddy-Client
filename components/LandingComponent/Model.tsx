import { StyleSheet, TouchableOpacity, Modal } from 'react-native';
import React from 'react';
import Sidebar from './Sidebar';

const Model = ({ setSidebarVisible, sidebarVisible }) => {
  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={sidebarVisible}>
      <TouchableOpacity style={styles.modalOverlay} onPress={closeSidebar} />
      <Sidebar onClose={closeSidebar} />
    </Modal>
  );
};

export default Model;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
