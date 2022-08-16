import React from "react";
import Card from "../components/Card";
import styled from "styled-components";

const Container = styled.div`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
`;

export default function Home() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
}
