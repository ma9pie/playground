import React, { useEffect, useRef, useState } from "react";

import { FirstTd, LastTd, Td, Tr } from "@/pages/TableTest/common/styles";

interface IProps {
  data: any;
}

const Row = ({ data }: IProps) => {
  const { display } = data;
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: "1000px 0px",
        threshold: 0.01,
      }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (!isVisible) {
    return (
      <Tr ref={rowRef} style={{ height: "32px" }}>
        <td colSpan={12} style={{ height: "32px" }} />
      </Tr>
    );
  }

  return (
    <Tr>
      <FirstTd>{data.name}</FirstTd>

      <Td>{display.kospiTotal}</Td>
      <Td>{display.kospiKrw}</Td>
      <Td>{display.kospiUsd}</Td>
      <Td style={{ color: display.kospiColor }}>{display.kospiRate}</Td>

      <Td>{display.nasdaqTotal}</Td>
      <Td>{display.nasdaqUsd}</Td>
      <Td style={{ color: display.nasdaqColor }}>{display.nasdaqRate}</Td>

      <Td>{display.cryptoTotal}</Td>
      <Td style={{ borderRight: 0, color: display.cryptoColor }}>
        {display.cryptoRate}
      </Td>

      <LastTd style={{ width: 80, right: 80 }}>{display.totalSum}</LastTd>
      <LastTd style={{ width: 80, right: 0, color: display.totalColor }}>
        {display.totalRate}
      </LastTd>
    </Tr>
  );
};

export default React.memo(Row);
