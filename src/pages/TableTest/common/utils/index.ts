/**
 * 숫자를 천 단위 콤마로 포맷팅
 * @param num 숫자
 */
export const formatNum = (num: number) => num.toLocaleString();

/**
 * 변동률 문자열을 받아 양수/음수/제로 상태에 따른 색상을 반환합니다.
 * @param rate 변동률
 */
export const getRateColor = (rate: string): string => {
  if (!rate || rate === "0" || rate === "0.00%") {
    return "#333";
  }

  return rate.startsWith("-") ? "#0055ff" : "#ff3333";
};

/**
 * Mock 데이터 생성
 * @param count 생성 데이터 개수
 */
export const generateMockData = (count: number) => {
  return Array(count)
    .fill(null)
    .map((_, idx) => {
      const kospiKrw = Math.floor(Math.random() * 1000000) + 500000;
      const kospiUsd = Math.floor(kospiKrw / 1350);
      const kospiTotal = kospiKrw + kospiUsd * 1350;
      const nasdaqUsd = Math.floor(Math.random() * 5000) + 1000;
      const nasdaqTotal = nasdaqUsd * 1350;
      const cryptoTotal = Math.floor(Math.random() * 2000000) + 100000;

      const createRateObj = () => {
        const num = Math.random() * 10 - 5;
        const rateStr = `${num.toFixed(2)}%`;
        return {
          string: rateStr,
          value: num,
          color: num === 0 ? "#333" : num < 0 ? "#0055ff" : "#ff3333",
        };
      };

      const kRate = createRateObj();
      const nRate = createRateObj();
      const cRate = createRateObj();
      const tRate = createRateObj();

      const totalSum = kospiTotal + nasdaqTotal + cryptoTotal;

      return {
        id: idx + 1,
        name: `자산 종목 ${String.fromCharCode(65 + (idx % 26))}${idx + 1}`,
        display: {
          kospiTotal: kospiTotal.toLocaleString(),
          kospiKrw: kospiKrw.toLocaleString(),
          kospiUsd: kospiUsd.toLocaleString(),
          kospiRate: kRate.string,
          kospiColor: kRate.color,

          nasdaqTotal: nasdaqTotal.toLocaleString(),
          nasdaqUsd: nasdaqUsd.toLocaleString(),
          nasdaqRate: nRate.string,
          nasdaqColor: nRate.color,

          cryptoTotal: cryptoTotal.toLocaleString(),
          cryptoRate: cRate.string,
          cryptoColor: cRate.color,

          totalSum: totalSum.toLocaleString(),
          totalRate: tRate.string,
          totalColor: tRate.color,
        },
        sortKeys: {
          "kospi.total": kospiTotal,
          "kospi.krw": kospiKrw,
          "kospi.usd": kospiUsd,
          "kospi.rate": kRate.value,
          "nasdaq.total": nasdaqTotal,
          "nasdaq.usd": nasdaqUsd,
          "nasdaq.rate": nRate.value,
          "crypto.total": cryptoTotal,
          "crypto.rate": cRate.value,
          "total.sum": totalSum,
          "total.rate": tRate.value,
        } as Record<string, number>,
      };
    });
};
