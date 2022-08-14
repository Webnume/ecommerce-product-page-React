import React from "react";
import styled from "styled-components/macro";
import Gallery from "../components/gallery/Gallery";
import { ReactComponent as Cart } from "../assets/images/icon-cart.svg";
import Button from "./button/Button";
import { formatCurrency } from "../utilities/formatCurrency";
import { discountCalculation } from "../utilities/discountCalculation";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  mark: string;
  price: number;
  discount: number;
  description: string;
  images: string[];
};

function StoreItem({
  id,
  name,
  mark,
  price,
  discount,
  description,
  images,
}: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <>
      <Gallery />
      <MainRight>
        <H2Styled>{mark.toUpperCase()}</H2Styled>
        <H1Styled>{name}</H1Styled>
        <Description>{description}</Description>
        <PricesContainer>
          <PricesTop>
            <Price>
              {formatCurrency(discountCalculation(price, discount))}
            </Price>
            <PriceOFF>{discount}%</PriceOFF>
          </PricesTop>
          <PriceOld>{formatCurrency(price)}</PriceOld>
        </PricesContainer>
        <AddToCartContainer>
          <MinPlusButtonsContainer>
            <MinusButton onClick={() => decreaseCartQuantity(id)} />
            <InputStyled type="number" value={quantity} onChange={() => {}} />
            <PlusButton onClick={() => increaseCartQuantity(id)} />
          </MinPlusButtonsContainer>
          {quantity > 0 ? (
            <Button onClick={() => removeFromCart(id)} backcolor={"red"}>
              <StyledCart />
              <span>Remove</span>
            </Button>
          ) : (
            <Button onClick={() => increaseCartQuantity(id)}>
              <StyledCart />
              <span>Add to cart</span>
            </Button>
          )}
        </AddToCartContainer>
      </MainRight>
    </>
  );
}

const MainRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 3vh;
  flex: 1;
  @media screen and (max-width: 900px) {
    padding-left: 0;
  }
`;

const H1Styled = styled.h1`
  font-size: calc(1.3rem + 2vw);
  font-weight: 700;
  margin: 0;
`;
const H2Styled = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  color: hsl(26, 100%, 55%);
  @media screen and (max-width: 900px) {
    font-size: .9rem;   
  }
`;
const Description = styled.p`
  line-height: calc(1rem + 1vw);
`;
const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 1rem;
  gap: 0.5rem;
  @media screen and (max-width: 900px) {
    flex-direction: row;
    width: 100%;
    align-items: center;
  }
`;
const PricesTop = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-size: 1.7rem;
  font-weight: 700;
  color: black;
`;
const PriceOFF = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: hsl(26, 100%, 55%);
  background-color: hsl(25, 100%, 94%);
  margin-left: 1rem;
  padding: 0.2rem;
`;
const PriceOld = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: hsl(220, 14%, 75%);
  text-decoration: line-through;
  display: block;
`;

const AddToCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & button {
    width: 17rem;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    & button {
      width: 100%;
    }
  }
`;

const MinPlusButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;  
  @media screen and (max-width: 900px) {
    margin-bottom: 1rem;    
  }
`;

const InputStyled = styled.input`
  flex: 1;
  text-align: center;
  padding: 1.1rem;
  font-size: 1rem;
  font-weight: 700;
  color: black;
  background-color: hsl(223, 64%, 98%);
  border: none;
  width: 2.3rem;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
  &:focus {
    outline: none;
  }
`;

const MinusButton = styled.span`
  flex: 1;
  text-align: center;
  background-color: hsl(223, 64%, 98%);
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
  padding: 1rem;
  color: hsl(25, 100%, 45%);
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  ::before {
    content: "-";
    display: block;
  }
  &:hover {
    opacity: 0.6;
  }
`;

const StyledCart = styled(Cart)`
  transform: scale(0.8);
  & path {
    fill: white;
  }
`;

const PlusButton = styled(MinusButton)`
  border-radius: 0 0.5rem 0.5rem 0;

  ::before {
    content: "+";
    display: block;
  }
`;
export default StoreItem;
