import React, { useContext } from "react";
import styled from "styled-components";

import { TodoContext } from "../context";

const FetchingStatus = () => {
  const { apiFetching, batches } = useContext(TodoContext);

  return (
    <div>
      <Wrapper>
        <h2>Current State</h2>
        <p>{apiFetching ? "Processing" : "Ready"}</p>
      </Wrapper>
    </div>
  );
};

export default FetchingStatus;

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid black;
`;
