import React from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

interface InputProps {
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder = '',
  children = null,
}) => {
  return (
    <Container>
      {children}
      <Text>{placeholder}</Text>
    </Container>
  );
};
