import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

interface ButtonTextProps {
  textColor: string;
}

export const Container = styled(RectButton)`
  width: 156px;
  height: 56px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)<ButtonTextProps>`
  font-family: 'Inter-Medium';
  font-size: 15px;

  color: ${props => props.textColor};
`;
