import React from 'react';
import { Image, StatusBar, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import OnboardingDot from '../../components/OnboardingDot';

import car from '../../assets/car.png';
import chevronRight from '../../assets/chevron-right.png';

import { Container, Number, Description, Footer, Dots } from './styles';
import { Title } from '../../styles/app';

const OnboardCar: React.FC = () => {
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
        <Image source={car} />
        <Number>02</Number>
      </View>
      <View style={{ marginTop: 96 }}>
        <Title>Depois, escolha o carro</Title>
        <Description>
          Vários modelos para você dirigir seguro, com conforto e segurança
        </Description>
      </View>
      <Footer>
        <Dots>
          <OnboardingDot />
          <OnboardingDot isActive />
        </Dots>
        <TouchableOpacity onPress={() => navigation.navigate('OnboardWelcome')}>
          <Image style={{ height: 24, width: 24 }} source={chevronRight} />
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default OnboardCar;
