import { Text, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  padding: 32px;
`;

export const Description = styled(Text)`
  font-size: 15px;
  line-height: 25px;
  font-family: 'Inter-Regular';
  margin-top: 24px;
  margin-bottom: 50px;
  width: 224px;
`;

export const HelperText = styled(Text)`
  font-family: 'Inter-Regular';
  font-size: 13px;
  line-height: 16px;
  color: #737380;
`;
