import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../../../components/Button";
import { TodoContext } from "../context";

const BatchItem = (props) => {
  const { setBatches } = useContext(TodoContext);
  const { data, idx } = props;

  const handleRemoveClick = () => {
    setBatches((prev) => {
      let _prev = [...prev];
      _prev.splice(idx, 1);
      return _prev;
    });
  };

  return (
    <Wrapper>
      <div className="batch_item_header">
        <p>Batch {idx + 1}</p>
        <Button onClick={handleRemoveClick}>Remove</Button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Todo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo) => (
            <tr key={`${todo.id}-${idx}`}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default BatchItem;

const Wrapper = styled.div`
  .batch_item_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
`;
