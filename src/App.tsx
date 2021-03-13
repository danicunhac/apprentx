import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>rentx</Text>
      </ScrollView>
    </SafeAreaView>
  </>
);

export default App;