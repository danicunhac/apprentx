import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  backgroundColor?: string;
  textColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children = null,
  textColor = '#e1e1e6',
  ...rest
}) => (
  <Container {...rest}>
    <ButtonText textColor={textColor}>{children}</ButtonText>
  </Container>
);
