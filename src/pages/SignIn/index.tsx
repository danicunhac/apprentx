import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Image, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import chevronLeft from '../../assets/chevron-left.png';
import { Input } from '../../components/Input';
import { Title } from '../../styles/app';

import { Container, Description } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <TouchableOpacity onPress={() => navigation.navigate('OnboardDate')}>
        <Image source={chevronLeft} />
      </TouchableOpacity>
      <Title>Estamos quase lá.</Title>
      <Description>
        Faça seu login para começar uma experiência incrível.
      </Description>
      <Input placeholder="Email">
        <Image source={chevronLeft} />
      </Input>
    </Container>
  );
};

export default SignIn;
