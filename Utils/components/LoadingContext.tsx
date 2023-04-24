import React, { createContext, useContext, useState, useMemo } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

interface LoadingContextValue {
  setLoading: (loading: boolean) => void;
  withLoading: (action: () => Promise<any>) => Promise<any>;
}

const LoadingContext = createContext<LoadingContextValue | undefined>(
  undefined
);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);

  const withLoading = async (action: () => Promise<any>) => {
    setLoading(true);
    try {
      const result = await action();
      setLoading(false);
      return result;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const value = useMemo(() => ({ setLoading, withLoading }), [setLoading]);

  return (
    <LoadingContext.Provider value={value}>
      {children}
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#407BFF" />
        </View>
      )}
    </LoadingContext.Provider>
  );
};

const styles = StyleSheet.create({
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
});
