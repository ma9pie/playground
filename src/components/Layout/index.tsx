import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

import Gnb from "@/components/Layout/Gnb";

const Layout = () => {
  return (
    <Root>
      <Gnb />
      <MainContent>
        <Outlet />
      </MainContent>
    </Root>
  );
};

export default Layout;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
`;
