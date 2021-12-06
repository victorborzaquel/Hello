import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container, Title
} from './styles';

export function UIButton({title, color, ...rest}: {
  title: string;
  color: string;
} & TouchableOpacityProps) {
  return (
    <Container 
      activeOpacity={0.7}
      color={color} 
      {...rest} 
    >
      <Title>{title}</Title>
    </Container>
  );
}
