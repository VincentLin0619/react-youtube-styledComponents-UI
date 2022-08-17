import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Content = styled.div`
  color: ${({ theme }) => theme.text};
  flex: 5;
`;
const Recommendation = styled.div`
  color: ${({ theme }) => theme.text};
  flex: 2;
`;

export default function Video() {
  return (
    <Container>
      <Content>Content</Content>
      <Recommendation>Recommendation</Recommendation>
    </Container>
  );
}
