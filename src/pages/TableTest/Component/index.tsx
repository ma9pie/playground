import styled from "@emotion/styled";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";

import Sorter from "@/components/Sorter";
import {
  FirstTh,
  LastTh,
  Table,
  TBody,
  Th,
  THead,
  Tr,
} from "@/pages/TableTest/common/styles";
import Row from "@/pages/TableTest/Component/Row";

interface IProps {
  data: any;
}

// 정렬 설정 타입
interface ISortConfig {
  key: string;
  direction: "ASC" | "DESC" | "NONE";
}

const Component = ({ data }: IProps) => {
  const [isPending, startTransition] = useTransition();
  const [sortConfig, setSortConfig] = useState<ISortConfig>({
    key: "",
    direction: "NONE",
  });

  const startTimeRef = useRef<number>(0);
  const [totalRenderTime, setTotalRenderTime] = useState<number>(0);

  const sortedData = useMemo(() => {
    const { key, direction } = sortConfig;
    if (direction === "NONE" || !key) return data;

    const isAsc = direction === "ASC";

    return [...data].sort((a, b) => {
      const aVal = a.sortKeys[key];
      const bVal = b.sortKeys[key];

      if (aVal === bVal) return 0;
      return isAsc ? (aVal > bVal ? 1 : -1) : aVal < bVal ? 1 : -1;
    });
  }, [data, sortConfig]);

  const getSortDirection = (key: string) => {
    return sortConfig.key === key ? sortConfig.direction : "NONE";
  };

  const onSortChange = useCallback(
    (key: string) => (direction: ISortConfig["direction"]) => {
      setTotalRenderTime(0);
      startTimeRef.current = performance.now();

      startTransition(() => {
        setSortConfig({ key, direction });
      });
    },
    []
  );

  useEffect(() => {
    if (!isPending && startTimeRef.current !== 0) {
      const endTime = performance.now();
      setTotalRenderTime(endTime - startTimeRef.current);
    }
  }, [isPending]);

  return (
    <Container>
      <RenderInfo>
        최근 업데이트 소요 시간:{" "}
        {isPending ? (
          <LoadingText>업데이트 중...</LoadingText>
        ) : totalRenderTime > 0 ? (
          `${(totalRenderTime / 1000).toFixed(3)}초`
        ) : null}
      </RenderInfo>
      <ScrollContainer isPending={isPending}>
        <Table>
          <THead>
            <Tr>
              <FirstTh rowSpan={2} style={{ width: 150 }}>
                <Remarks>비고</Remarks>
              </FirstTh>
              <Th colSpan={4}>KOSPI</Th>
              <Th colSpan={3}>NASDAQ</Th>
              <Th colSpan={2} style={{ borderRight: 0 }}>
                CRYPTO
              </Th>
              <LastTh colSpan={2} style={{ width: 160, right: 0 }}>
                합계
              </LastTh>
            </Tr>

            <Tr>
              {/* KOSPI */}
              <Th>
                <Sorter
                  onSort={onSortChange("kospi.total")}
                  direction={getSortDirection("kospi.total")}
                >
                  전체
                </Sorter>
              </Th>
              <Th>
                <Sorter
                  onSort={onSortChange("kospi.krw")}
                  direction={getSortDirection("kospi.krw")}
                >
                  원화
                </Sorter>
              </Th>
              <Th>
                <Sorter
                  onSort={onSortChange("kospi.usd")}
                  direction={getSortDirection("kospi.usd")}
                >
                  달러
                </Sorter>
              </Th>
              <Th>
                <Sorter
                  onSort={onSortChange("kospi.rate")}
                  direction={getSortDirection("kospi.rate")}
                >
                  변동률
                </Sorter>
              </Th>

              {/* NASDAQ */}
              <Th>
                <Sorter
                  onSort={onSortChange("nasdaq.total")}
                  direction={getSortDirection("nasdaq.total")}
                >
                  전체
                </Sorter>
              </Th>
              <Th>
                <Sorter
                  onSort={onSortChange("nasdaq.usd")}
                  direction={getSortDirection("nasdaq.usd")}
                >
                  달러
                </Sorter>
              </Th>
              <Th>
                <Sorter
                  onSort={onSortChange("nasdaq.rate")}
                  direction={getSortDirection("nasdaq.rate")}
                >
                  변동률
                </Sorter>
              </Th>

              {/* CRYPTO */}
              <Th>
                <Sorter
                  onSort={onSortChange("crypto.total")}
                  direction={getSortDirection("crypto.total")}
                >
                  전체
                </Sorter>
              </Th>
              <Th style={{ borderRight: 0 }}>
                <Sorter
                  onSort={onSortChange("crypto.rate")}
                  direction={getSortDirection("crypto.rate")}
                >
                  변동률
                </Sorter>
              </Th>

              {/* 합계 */}
              <LastTh style={{ width: 80, right: 80 }}>
                <Sorter
                  onSort={onSortChange("total.sum")}
                  direction={getSortDirection("total.sum")}
                >
                  전체
                </Sorter>
              </LastTh>
              <LastTh style={{ width: 80, right: 0 }}>
                <Sorter
                  onSort={onSortChange("total.rate")}
                  direction={getSortDirection("total.rate")}
                >
                  변동률
                </Sorter>
              </LastTh>
            </Tr>
          </THead>

          <TBody>
            {sortedData.map((item: any) => (
              <Row key={item.id} data={item}></Row>
            ))}
          </TBody>
        </Table>
      </ScrollContainer>
    </Container>
  );
};

export default Component;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RenderInfo = styled.div`
  font-size: 13px;
  color: #4b5563;
  font-weight: 600;
  height: 24px;
  display: flex;
  align-items: center;
`;

const LoadingText = styled.span`
  color: #2563eb;
  &::after {
    content: "";
    display: inline-block;
    width: 12px;
    animation: dots 1.5s infinite;
  }
  @keyframes dots {
    0%,
    20% {
      content: ".";
    }
    40% {
      content: "..";
    }
    60% {
      content: "...";
    }
    80%,
    100% {
      content: "";
    }
  }
`;

const ScrollContainer = styled.div<{ isPending: boolean }>`
  width: 100%;
  overflow-x: auto;
  min-width: 800px;
  transition: opacity 0.2s ease;
  opacity: ${({ isPending }) => (isPending ? 0.5 : 1)};
`;

const Remarks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
