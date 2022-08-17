import React from "react";
import Card from "../components/Card";
import styled from "styled-components";

const Container = styled.div`
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
`;

const CardList = () => {
  const cardList = [];
  let count = 20;
  for (let i = 0; i < count; i++) {
    cardList.push(<Card key={i} />);
  }
  return cardList;
};

export default function Home() {
  return (
    <Container>
      <CardList />
    </Container>
  );
}
