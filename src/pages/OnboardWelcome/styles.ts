import { Text, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  background-color: #1b1b1f;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WelcomeText = styled(Text)`
  color: #f4f5f6;
  font-family: 'Archivo-SemiBold';
  font-size: 40px;
  line-height: 44px;
`;

export const HelperText = styled(Text)`
  font-family: 'Inter-Regular';
  color: #dedee3;
  font-size: 15px;
  line-height: 25px;
  margin-top: 16px;
`;
