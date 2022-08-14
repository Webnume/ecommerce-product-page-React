import logo from "../../assets/images/logo.svg";
import styled from "styled-components/macro";
import avatarImage from "../../assets/images/image-avatar.png";
import Menu from "../menu/Menu";
import ShoppingCart from "../shoppingcart/ShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Link to="/">
          <LogoImage src={logo} alt="logo" />
        </Link>
        <Menu />
      </HeaderLeft>
      <HeaderRight>
        <ShoppingCart />
        <AvatarImage src={avatarImage} alt="avatar" />
      </HeaderRight>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  /* min-width: 1110px; */
  width: clamp(60%, 77%, 1100px);
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 6rem;
  @media screen and (max-width: 900px) {
    margin: 0;
    border: none;
    width: 100%;
    height: 67px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  /* min-width: 360px; */
  align-items: center;
  gap: 10%;
  position: relative;
  @media screen and (max-width: 900px) {
    align-items: flex-end;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-direction: row-reverse;
  }
`;

const LogoImage = styled.img`
  transform: scale(1.1);
  margin-right: 3rem;
  @media screen and (max-width: 900px) {
    transform: scale(1);
  }
`;

const AvatarImage = styled.img`
  width: 40%;
  cursor: pointer;
  border-radius: 50%;
  border: 2.5px solid transparent;
  &:hover {
    border: 2.5px solid hsl(26, 100%, 55%);
  }
  @media screen and (max-width: 900px) {
    width: 1.5rem;
  }
`;

export default Header;
