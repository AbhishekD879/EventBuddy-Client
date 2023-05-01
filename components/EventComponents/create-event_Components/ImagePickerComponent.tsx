import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from '../../../suprabase.config';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const ImagePickerComponent = () => {
  const [image, setImage] = useState<string | null>(null);

  const uploadImage = async (uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const fileName = uri.split('/').pop() || 'image.jpg';

    const { error } = await supabase.storage
      .from('eventbucket')
      .upload(`/${supabase.auth.getSession}`, blob, { contentType: 'image/jpeg' });

    if (error) {
      console.error('Error uploading image:', error);
      return;
    }
    console.log('Image uploaded successfully');
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission required: You need to grant camera roll permission to access your photos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri)
      // setImage(result.assets[0].uri);
      // uploadImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',marginBottom:heightPercentageToDP(2) }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {Boolean(image) && <Image source={{ uri: image }} style={{ width: widthPercentageToDP(10), height: heightPercentageToDP(10) }} />}
    </View>
  );
};

export default ImagePickerComponent;
