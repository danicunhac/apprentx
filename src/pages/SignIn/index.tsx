import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StatusBar, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import chevronLeft from '../../assets/chevron-left.png';
import emailIcon from '../../assets/email.png';
import passwordIcon from '../../assets/password.png';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Title } from '../../styles/app';

import { Container, Description, HelperText } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmitForm = () => {
    return true;
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <TouchableOpacity onPress={() => navigation.navigate('OnboardWelcome')}>
        <Image source={chevronLeft} />
      </TouchableOpacity>
      <Title style={{ marginTop: 80 }}>Estamos quase lá.</Title>
      <Description>
        Faça seu login para começar uma experiência incrível.
      </Description>
      <View style={{ height: 120, justifyContent: 'space-between' }}>
        <Input name="email" placeholder="E-mail">
          <Image source={emailIcon} />
        </Input>
        <Input name="password" placeholder="Senha">
          <Image source={passwordIcon} />
        </Input>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 32,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CheckBox
            value={rememberMe}
            onValueChange={newValue => setRememberMe(newValue)}
            tintColors={{ true: '#1b1b1f' }}
          />
          <HelperText style={{ marginLeft: 12 }}>Lembrar-me</HelperText>
        </View>
        <HelperText>Esqueci minha senha</HelperText>
      </View>
      <Button
        onPress={() => handleSubmitForm}
        backgroundColor="#dc1637"
        style={{ width: '100%' }}
      >
        Login
      </Button>
    </Container>
  );
};

export default SignIn;
