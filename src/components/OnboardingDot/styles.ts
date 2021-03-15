import { View } from 'react-native';
import styled, { css } from 'styled-components';

interface DotProps {
  isActive?: boolean;
}

export const Dot = styled(View)<DotProps>`
  height: 4px;
  width: 4px;
  border-radius: 2px;
  background-color: #aeaeb3;

  ${props =>
    props.isActive &&
    css`
      background-color: #47474d;
    `}
`;
