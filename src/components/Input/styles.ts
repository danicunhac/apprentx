import { TextInput, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: 56px;
`;

export const IconContainer = styled(View)`
  background-color: #f2f2fa;
  padding: 16px;
  border-right-width: 1px;
  border-right-color: #fff;
`;

export const InputField = styled(TextInput)`
  flex: 1;
  color: #7a7a80;
  font-size: 15px;
  font-family: 'Inter-Regular';
  background-color: #f2f2fa;
  padding: 20px;
  border-left-width: 1px;
  border-left-color: #fff;
`;
