import React, { useState } from "react";

const initialState = {
  batches: [],
  responses: {},
  apiFetching: false,
  fetchLogs: [],
  setBatches: () => null,
  setResponses: () => null,
  setApiFetching: () => null,
  setFetchLogs: () => null,
};

export const TodoContext = React.createContext(initialState);

export const TodoContextProvider = ({ children }) => {
  const [batches, setBatches] = useState([]);
  const [responses, setResponses] = useState({});
  const [apiFetching, setApiFetching] = useState(false);
  const [fetchLogs, setFetchLogs] = useState([]);

  return (
    <TodoContext.Provider
      value={{
        batches,
        responses,
        apiFetching,
        fetchLogs,
        setBatches,
        setResponses,
        setApiFetching,
        setFetchLogs,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
