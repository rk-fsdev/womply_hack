import React, { useContext } from "react";
import styled from "styled-components";

import { TodoContext } from "../context";
import BatchItem from "./BatchItem";

const BatchList = () => {
  const { batches } = useContext(TodoContext);
  return (
    <Wrapper>
      {batches.map((batch, idx) => (
        <BatchItem data={batch} idx={idx} key={`batch-${idx}`} />
      ))}
    </Wrapper>
  );
};

export default BatchList;

const Wrapper = styled.div`
  height: 100%;
  border: 1px solid black;
  overflow: auto;
`;
