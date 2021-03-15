import { Text, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  background-color: #fff;
  flex: 1;
  padding: 160px 32px 34px 32px;
`;

export const Number = styled(Text)`
  color: #ebebf0;
  font-size: 64px;
  font-family: 'Archivo-Bold';
`;

export const Title = styled(Text)`
  font-size: 40px;
  line-height: 42px;
  width: 196px;
  color: #47474d;
  font-family: 'Archivo-Bold';
`;

export const Description = styled(Text)`
  font-size: 15px;
  line-height: 25px;
  font-family: 'Inter-Regular';
  margin-top: 24px;
  width: 208px;
`;

export const Footer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 96px;
`;

export const Dots = styled(View)`
  flex-direction: row;
  width: 16px;
  justify-content: space-between;
`;
