import React from 'react';

import {
  Container, Content, Title
} from './styles';

export function UIDescription({title, content, index}: {
  title: string;
  content: string;
  index: number;
}) {
  return (
    <Container index={index}>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
}
