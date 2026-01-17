import styled from "@emotion/styled";
import { type ReactNode } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

type SortDirection = "ASC" | "DESC" | "NONE";

interface IProps {
  children?: ReactNode;
  direction: "ASC" | "DESC" | "NONE";
  onSort: (direction: SortDirection) => void;
}

const Sorter = ({ children, direction, onSort }: IProps) => {
  const handleSort = () => {
    let nextDirection: SortDirection = "NONE";
    if (direction === "NONE") nextDirection = "ASC";
    else if (direction === "ASC") nextDirection = "DESC";
    else nextDirection = "NONE";

    if (onSort) onSort(nextDirection);
  };

  return (
    <Wrapper onClick={handleSort} data-dir={direction}>
      {children}
      <IconContainer>
        <StyledSortUp size={10} className="up-icon" />
        <StyledSortDown size={10} className="down-icon" />
      </IconContainer>
    </Wrapper>
  );
};

export default Sorter;

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  width: 100%;
  height: 100%;

  &[data-dir="ASC"] .up-icon {
    color: #333;
  }
  &[data-dir="DESC"] .down-icon {
    color: #333;
  }
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 8px;
  height: 12px;
`;

const StyledSortUp = styled(FaAngleUp)`
  position: absolute;
  top: -2px;
  color: #ccc;
`;

const StyledSortDown = styled(FaAngleDown)`
  position: absolute;
  bottom: -2px;
  color: #ccc;
`;
