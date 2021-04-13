import React from "react";
import styled from "styled-components";

import BatchList from "./BatchList";
import { TodoContextProvider } from "./context";
import FetchingStatus from "./FetchingStatus";
import SearchStuff from "./SearchStuff";

const Todos = () => {
  return (
    <TodoContextProvider>
      <Container>
        <SearchStuff />
        <BatchList />
        <FetchingStatus />
      </Container>
    </TodoContextProvider>
  );
};

export default Todos;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  height: 100%;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 320px) {
    grid-template-columns: 1fr;
  }
`;
