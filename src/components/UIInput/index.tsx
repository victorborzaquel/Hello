import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { TextInputProps } from 'react-native';
import { IconWrapper, Input } from './styles';

import {
  Container
} from './styles';

export function UIInput({ iconName, ...rest }: {
  iconName: React.ComponentProps<typeof AntDesign>['name'];
} & TextInputProps) {
  return (
    <Container>
      <IconWrapper>
        <AntDesign name={iconName} size={20} color="black" />
      </IconWrapper>

      <Input
        {...rest}
      />
    </Container>
  );
}
