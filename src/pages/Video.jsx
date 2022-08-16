import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
`;
const Content = styled.div`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
  flex: 5;
`;
const Recommendation = styled.div`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.bg};
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
