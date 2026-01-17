import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";

import {
  DATA_COUNT_STORAGE_KEY,
  DATA_COUNTS,
  DEFAULT_DATA_COUNT,
} from "@/pages/TableTest/common/constants";
import { generateMockData } from "@/pages/TableTest/common/utils";
import Component from "@/pages/TableTest/Component";

const TableTest = () => {
  const [count, setCount] = useState<number>(() => {
    const saved = localStorage.getItem(DATA_COUNT_STORAGE_KEY);
    return saved ? parseInt(saved, 10) : DEFAULT_DATA_COUNT;
  });

  const mockData = useMemo(() => generateMockData(count), [count]);

  useEffect(() => {
    localStorage.setItem(DATA_COUNT_STORAGE_KEY, count.toString());
  }, [count]);

  return (
    <Wrapper>
      <HeaderSection>
        <Info>{`데이터 개수: ${count.toLocaleString()}개`}</Info>
        <ButtonGroup>
          {DATA_COUNTS.map((num) => (
            <CountButton
              key={num}
              active={count === num}
              onClick={() => setCount(num)}
            >
              {num}
            </CountButton>
          ))}
        </ButtonGroup>
      </HeaderSection>

      <Component data={mockData} />
    </Wrapper>
  );
};

export default TableTest;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

const Info = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const CountButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid ${(props) => (props.active ? "#2563eb" : "#dee2e6")};
  background-color: ${(props) => (props.active ? "#2563eb" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#4b5563")};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#1d4ed8" : "#f8f9fa")};
    border-color: #2563eb;
  }
`;
