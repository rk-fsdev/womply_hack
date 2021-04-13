import React, { useContext, useState } from "react";
import styled from "styled-components";

import { getTodo } from "../../../service/api";
import Button from "../../../components/Button";
import { TodoContext } from "../context";

const NUM_RANGE_REGEX = /(^[0-9]+)-([0-9]+)$/;

const SearchStuff = () => {
  const {
    responses,
    fetchLogs,
    setApiFetching,
    setBatches,
    setResponses,
    setFetchLogs,
  } = useContext(TodoContext);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = NUM_RANGE_REGEX.test(value);
    if (isValid) {
      const matches = value.match(NUM_RANGE_REGEX);
      const from = parseInt(matches[1]);
      let _from = from;
      const to = parseInt(matches[2]);
      if (_from <= to) {
        if (_from >= 1 && _from <= 200 && to >= 1 && to <= 200) {
          const startTime = new Date();
          setError("");
          const promises = [];
          const results = [];
          while (_from <= to) {
            if (!responses[_from]) {
              promises.push(getTodo(_from));
            } else {
              results.push(responses[_from]);
            }
            _from++;
          }
          try {
            setApiFetching(true);
            const apiResponse = await Promise.all(promises);
            setResponses((prev) => {
              const _prev = { ...prev };
              apiResponse.forEach((res) => {
                _prev[res.id] = res;
                results.push(res);
              });
              return _prev;
            });
          } catch (e) {
            //
          }
          const endTime = new Date();
          const timeDiff = endTime - startTime; // ms
          setFetchLogs((prev) => {
            return [
              ...prev,
              `Fetched ${from}-${to} took ${timeDiff / 1000} seconds`,
            ];
          });
          setBatches((prev) => [...prev, results]);
          setApiFetching(false);
        } else {
          setError("start and end value should be between 1 to 200");
        }
      } else {
        setError("start value should be smaller than end value");
      }
    } else setError("Range valid format");
  };

  const handleInputChange = (e) => {
    setValue(e.target.value.trim());
  };

  return (
    <Wrapper>
      <h3>Range of todos to fetch</h3>
      <form className="input_form" onSubmit={handleSubmit}>
        <input onChange={handleInputChange} value={value} />
        <Button type="submit">Fetch</Button>
        {!!error && <p className="text-error">{error}</p>}
        <p>
          Only this format should be allowed
          <br />
          1-5 <br />
          10-45
        </p>
      </form>
      <div className="fetch_logs">
        {fetchLogs.map((log, idx) => (
          <p key={idx}>{log}</p>
        ))}
      </div>
    </Wrapper>
  );
};

export default SearchStuff;

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid black;
  .fetch_logs {
    border: 1px solid black;
  }
`;
