import React from 'react';
import { Text, Image, View } from 'react-native';

import calendar from '../../assets/calendar.png';

import { Container, Number } from './styles';

const OnboardDate: React.FC = () => {
  return (
    <Container>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Image source={calendar} />
        <Number>01</Number>
      </View>
    </Container>
  );
};

export default OnboardDate;
