import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

export const Container = styled(RectButton)`
  width: 156px;
  height: 56px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)`
  font-family: 'Inter-Medium';
  font-size: 15px;
  color: #e1e1e6;
`;
