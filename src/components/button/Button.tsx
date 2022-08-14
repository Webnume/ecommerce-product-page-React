import { ReactNode } from "react";
import styled from "styled-components/macro";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  backcolor?: string;
};
function Button({ children, onClick, backcolor }: ButtonProps) {
  return (
    <AddToCartButton onClick={onClick} bkcolor={backcolor}>
      {children}{" "}
    </AddToCartButton>
  );
}

interface ButtonT {
  width?: string;
  bkcolor?: string;
}

const AddToCartButton = styled.button<ButtonT>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 4.6rem;
  margin-left: 1rem;
  background-color: ${({ bkcolor }) =>
    bkcolor === "red" ? "#eb291c" : "hsl(26, 100%, 55%)"};
  color: white;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  & span {
    margin-left: 1rem;
    width: max-content;
  }
  &:hover {
    opacity: 0.6;
  }
  @media screen and (max-width: 900px) {
    margin-left: 0;
  }
`;
export default Button;
