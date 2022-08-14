import styled from "styled-components/macro";
import { ReactComponent as CartIcon } from "../../assets/images/icon-cart.svg";
import Button from "../button/Button";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItem from "../cartItem/CartItem";

interface CartCardProps {
  isOpen?: boolean;
}

function ShoppingCart() {
  const { openCart, closeCart, cartQuantity, isCartOpen, cartItems } =
    useShoppingCart();

  return (
    <div style={{position:"relative"}}>
      <StyledCart onClick={isCartOpen ? closeCart : openCart} />
      {cartItems.length !== 0 && (
        <CartIndicator onClick={isCartOpen ? closeCart : openCart}>
          {cartQuantity}
        </CartIndicator>
      )}
      <CartCardContainer isOpen={isCartOpen}>
        <CartCardTop>
          Cart <span onClick={closeCart}>&#215;</span>
        </CartCardTop>
        <CartCardContent>
          {cartItems.length === 0
            ? "Your cart is empty "
            : cartItems.map((item) => <CartItem key={item.id} {...item} />)}
          {cartItems.length !== 0 && <Button>Checkout</Button>}
        </CartCardContent>
      </CartCardContainer>
    </div>
  );
}

const StyledCart = styled(CartIcon)`
  cursor: pointer;
`;

const CartIndicator = styled.div`
  position: absolute;
  top: -3px;
  left: 10px;
  height: 0.8rem;
  background-color: hsl(26, 100%, 55%);
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.6rem;
  padding: 0rem 0.5rem;
  cursor: pointer;
`;

const CartCardContainer = styled.div<CartCardProps>`
  position: absolute;
  top: 130%;
  right: -100px;
  background-color: white;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  transition: all 0.3s ease-in-out;
  width: clamp(360px, 360px, 50%);
  min-height: 240px;
  scrollbar-width: none;
  @media screen and (max-width: 900px) {
    right: -26px;
    top: 186%;
    width: 96vw;
  }
`;

const CartCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  width: 100%;
  padding: 1rem;
  font-weight: 700;
  box-sizing: border-box;
  & span {
    font-size: 1.5rem;
    cursor: pointer;
    color: #adadad;
  }
`;

const CartCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  min-height: 190px;
  box-sizing: border-box;
  & p {
    margin: 0;
    margin-top: 0.7rem;
  }
  & button {
    margin-left: 0;
  }
`;

export default ShoppingCart;
