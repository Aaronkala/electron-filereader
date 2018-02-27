import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 1em;
`

const Container = (props) => (
  <StyledContainer {...props} />
)

export default Container
