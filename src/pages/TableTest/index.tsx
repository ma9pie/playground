import styled from "@emotion/styled";

import { DATA_COUNT } from "@/pages/TableTest/common/constants";
import Component from "@/pages/TableTest/Component";

const TableTest = () => {
  return (
    <Wrapper>
      <Info>{`데이터 개수 ${DATA_COUNT}개`}</Info>
      <Component></Component>
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
const Info = styled.div``;
