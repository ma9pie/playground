import styled from "@emotion/styled";

export const Table = styled.table`
  width: 100%;
  min-width: 1920px;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
`;

export const THead = styled.thead`
  background-color: #f8f9fa;
  position: sticky;
  top: 0;

  & > tr:not(:first-of-type) th {
    border-top: none;
  }
`;

export const TBody = styled.tbody``;

export const Tr = styled.tr`
  content-visibility: auto;
  contain-intrinsic-size: 1px 32px;
`;

export const Th = styled.th`
  box-sizing: border-box;
  border-bottom: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
  height: 36px;
  background-color: #f8f9fa;
  text-align: center;
  font-size: 14px;
  vertical-align: middle;
`;

export const Td = styled.td`
  border-bottom: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
  padding: 8px;
  text-align: center;
  font-size: 13px;
  height: 32px;
`;

export const FirstTh = styled(Th)`
  position: sticky;
  left: 0;
  z-index: 10;
  border-left: 1px solid #dee2e6;
`;

export const FirstTd = styled(Td)`
  position: sticky;
  left: 0;
  z-index: 10;
  background-color: #f8f9fa;
  border-left: 1px solid #dee2e6;
`;

export const LastTh = styled(Th)`
  position: sticky;
  z-index: 10;
  background-color: #f8f9fa;
  border-left: 1px solid #dee2e6;

  & + & {
    border-left: none;
  }
`;

export const LastTd = styled(Td)`
  position: sticky;
  z-index: 10;
  background-color: #ffffff;
  border-left: 1px solid #dee2e6;

  & + & {
    border-left: none;
  }
`;
