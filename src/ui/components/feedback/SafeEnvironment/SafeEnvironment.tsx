import { Container } from '@material-ui/core';
import React from 'react';
import { SafeEnvironmentContainer } from './SafeEnvironment.style';

export default function SafeEnvironment() {
  return (
    <SafeEnvironmentContainer>
      <Container>Ambiente Seguro</Container>
    </SafeEnvironmentContainer>
  );
}
