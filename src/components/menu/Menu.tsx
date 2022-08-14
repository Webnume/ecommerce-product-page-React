import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { useState } from "react";

type MainContainerProps = {
  isMenuOpen: boolean;
};

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuContainer isMenuOpen={isMenuOpen}>
      <OpenLinksButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <CloseButton>&#10005;</CloseButton>
        ) : (
          <BurgerButton>&#8801;</BurgerButton>
        )}
      </OpenLinksButton>
      <DesktopMenu>
        <MenuItem to="#" title="Collections">
          Collections
        </MenuItem>
        <MenuItem to="#" title="Men">
          Men
        </MenuItem>
        <MenuItem to="#" title="Women">
          Women
        </MenuItem>
        <MenuItem to="#" title="About">
          About
        </MenuItem>
        <MenuItem to="#" title="Contact">
          Contact
        </MenuItem>
      </DesktopMenu>
      {isMenuOpen && (
        <MobileMenu>
          <MenuItem to="#" title="Collections">
            Collections
          </MenuItem>
          <MenuItem to="#" title="Men">
            Men
          </MenuItem>
          <MenuItem to="#" title="Women">
            Women
          </MenuItem>
          <MenuItem to="#" title="About">
            About
          </MenuItem>
          <MenuItem to="#" title="Contact">
            Contact
          </MenuItem>
        </MobileMenu>
      )}
    </MenuContainer>
  );
}

const MenuContainer = styled.nav<MainContainerProps>`
  margin: 0;
  display: flex;
  /* height: ${({ isMenuOpen }) => (isMenuOpen ? "100vh" : "100%")}; */
`;

const DesktopMenu = styled.nav`
  list-style: none;
  justify-content: space-evenly;
  min-width: 360px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  display: inline-block;
  padding: 3vh 1vh;
  cursor: pointer;
  border-top: 0.5rem solid transparent;
  border-bottom: 0.3rem solid transparent;
  color: inherit;
  &:hover {
    border-bottom: 0.3rem solid hsl(26, 100%, 55%);
    font-weight: 700;
    font-size: 1.099rem;
    transition: all 0.3s ease-in-out;
  }
  &:before {
    display: block;
    content: attr(title);
    font-weight: 700;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  @media (max-width: 900px) {
    padding: 1vh;
    font-weight: 700;
    width: 80%;
    &:hover {
      padding: 1vh 0;
    }
  }
`;

const OpenLinksButton = styled.button`
  width: 70px;
  /* height: 50px; */
  background: none;
  border: none;
  color: black;
  /* font-size: 45px; */
  cursor: pointer;
  z-index: 2;
  @media (min-width: 900px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 227px;
  background-color: white;
  z-index: 1;
  @media (min-width: 900px) {
    display: none;
  }
  @media (max-width: 900px) {
    align-items: unset;
    padding-left: 19px;
    padding-top: 78px;
  }
`;

const CloseButton = styled.span`
font-size: 1rem; 
font-weight: 700;
`;

const BurgerButton = styled.span`

font-size: 2rem;
`;

export default Menu;
