import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

import viteLogo from "/vite.svg";
import reactLogo from "@/assets/react.svg";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <Logo src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <Logo src={reactLogo} className="react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <Card>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>

      <ReadTheDocs>Click on the Vite and React logos to learn more</ReadTheDocs>
    </Wrapper>
  );
};

export default Home;

const logoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @media (prefers-reduced-motion: no-preference) {
    &.react {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

const Card = styled.div`
  padding: 2em;
`;

const ReadTheDocs = styled.p`
  color: #888;
`;
