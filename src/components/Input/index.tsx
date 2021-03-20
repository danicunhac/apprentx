import React, { useRef } from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputField, IconContainer } from './styles';

interface InputProps extends TextInputProps {
  name?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder = '',
  children = null,
}) => {
  const inputElementRef = useRef(null);

  return (
    <Container>
      <IconContainer>{children}</IconContainer>
      <InputField
        placeholderTextColor="#aeaeb3"
        ref={inputElementRef}
        placeholder={placeholder}
      />
    </Container>
  );
};
