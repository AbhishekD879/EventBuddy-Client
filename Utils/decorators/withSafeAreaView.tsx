import React from 'react';
import { SafeAreaView } from 'react-native';
import useConnectionStatus from '../hooks/useConnectionStatus';
import ConnectionNotFound from '../components/ConnectionNotFound';
import { LoadingProvider } from '../components/LoadingContext';
function withSafeArea<P extends object>(Component: React.ComponentType<P>) {
  return (props: P) => {
    const isConnected = useConnectionStatus();

    return (
      <SafeAreaView style={{ flex: 1 }}>
        {isConnected ? <Component {...props} /> : <ConnectionNotFound />}
      </SafeAreaView>
    );
  };
}

function withSafeAreaWrapper<P extends object>(Component: React.ComponentType<P>) {
  const SafeComponent = withSafeArea(Component);
  return (props: P) => <LoadingProvider><SafeComponent {...props} /></LoadingProvider>;
}

export default withSafeAreaWrapper;
