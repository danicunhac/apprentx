import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StatusBar, View } from 'react-native';
import icon from '../../assets/icon.png';
import Button from '../../components/Button';

import { Container, WelcomeText, HelperText } from './styles';

const OnboardWelcome: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#1b1b1f" />
      <Image source={icon} />
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 120,
        }}
      >
        <WelcomeText>Seja</WelcomeText>
        <WelcomeText>Bem-vindo</WelcomeText>
        <HelperText>O que você deseja fazer?</HelperText>
      </View>
      <View
        style={{
          marginTop: 128,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 72,
          }}
        >
          <Button
            onPress={() => navigation.navigate('SignIn')}
            backgroundColor="#dc1637"
            style={{ marginRight: 8 }}
          >
            Login
          </Button>
          <Button
            onPress={() => navigation.navigate('SignUp')}
            backgroundColor="#29292e"
            style={{ marginLeft: 8 }}
          >
            Cadastro
          </Button>
        </View>
        <Button
          onPress={() => navigation.navigate('OnboardDate')}
          textColor="#7a7a80"
        >
          Voltar
        </Button>
      </View>
    </Container>
  );
};

export default OnboardWelcome;
