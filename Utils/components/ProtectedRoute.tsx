import React, { useEffect, useState} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { supabase as supabaseClient } from './../../suprabase.config'; // Import your Supabase client instance
import { useRouter } from 'expo-router';

const ProtectedRoute = ({ children, navigation=useRouter() }) => {

  

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const { data, error } = await supabaseClient.auth.getSession();
      console.log(data)
      if (data.session) {
        setIsAuthenticated(true);
      } else if (error) {
        console.error('Error checking authentication:', error);
      }

      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigation.push('/login'); // Navigate to the login screen if not authenticated
    }
  }, [isLoading, isAuthenticated, navigation]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#407BFF" />
      </View>
    );
  }

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
