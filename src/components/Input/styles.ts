import { TextInputComponent, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  width: 100%;
  flex-direction: row;
`;

export const TextInput = styled(TextInputComponent)`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;
