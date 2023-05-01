import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';

const FooterComponent: React.FC = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <IconButton
        icon="plus"
        iconColor="#407BFF"
        size={30}
        onPress={() => router.push('/event/create-event')}
        style={styles.plusButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  plusButton: {
    backgroundColor: '#407BFF',
    borderRadius: 30,
    elevation: 4,
  },
});

export default FooterComponent;
