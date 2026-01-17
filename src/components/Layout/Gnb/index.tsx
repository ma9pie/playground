import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Gnb = () => {
  return (
    <Nav>
      <NavContainer>
        {/* 로고 영역 */}
        <Logo>
          <Link to="/">PLAYGROUND</Link>
        </Logo>

        {/* 중앙 메뉴 영역 */}
        <MenuList>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/table-test">Table test</Link>
          </MenuItem>
        </MenuList>

        {/* 우측 액션 버튼 영역 */}
        <ButtonGroup>
          <LoginButton>Login</LoginButton>
          <SignUpButton>Get Started</SignUpButton>
        </ButtonGroup>
      </NavContainer>
    </Nav>
  );
};

export default Gnb;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

const Logo = styled.div`
  a {
    font-size: 1.25rem;
    font-weight: 900;
    color: #1a1a1a;
    text-decoration: none;
    letter-spacing: -0.5px;
  }
`;

const MenuList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  a {
    text-decoration: none;
    color: #4b5563;
    font-size: 0.95rem;
    font-weight: 500;
    transition: color 0.2s ease;
    position: relative;

    &:hover {
      color: #2563eb;
    }

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: #2563eb;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  color: #4b5563;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;

  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }
`;

const SignUpButton = styled.button`
  background-color: #111827;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 8px 18px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.1s active, background-color 0.2s;

  &:hover {
    background-color: #374151;
  }

  &:active {
    transform: scale(0.96);
  }
`;
