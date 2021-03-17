import React from 'react';
import { Image, StatusBar, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import OnboardingDot from '../../components/OnboardingDot';

import calendar from '../../assets/calendar.png';
import chevronRight from '../../assets/chevron-right.png';

import { Container, Number, Description, Footer, Dots } from './styles';
import { Title } from '../../styles/app';

const OnboardDate: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
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
      <View style={{ marginTop: 96 }}>
        <Title>Primeiro, escolha a data</Title>
        <Description>
          Você é quem define um período, e nós mostraremos os carros disponíveis
        </Description>
      </View>
      <Footer>
        <Dots>
          <OnboardingDot isActive />
          <OnboardingDot />
        </Dots>
        <TouchableOpacity onPress={() => navigation.navigate('OnboardCar')}>
          <Image style={{ height: 24, width: 24 }} source={chevronRight} />
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default OnboardDate;
