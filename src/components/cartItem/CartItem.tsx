import styled from "styled-components/macro";
import { ReactComponent as DeleteIcon } from "../../assets/images/icon-delete.svg";
import image1 from "../../assets/images/image-product-1.jpg";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import storeItems from "../../data/items.json";
import { discountCalculation } from "../../utilities/discountCalculation";
import { formatCurrency } from "../../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (!item) return null;

  const discountPrice = discountCalculation(item.price, item.discount);

  return (
    <CartItemsContainer>
      <CartItemPhoto src={image1} />
      <div className="cart-items">
        <span>{item.name}</span>
        <p>
          {formatCurrency(discountPrice)} x {quantity}{" "}
          <span style={{ fontWeight: "700" }}>
            {formatCurrency(discountPrice * quantity)}
          </span>
        </p>
      </div>
      <StyledDeleteIcon onClick={() => removeFromCart(id)} />
    </CartItemsContainer>
  );
}

const StyledDeleteIcon = styled(DeleteIcon)`
  cursor: pointer;
`;

const CartItemsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 1rem;
`;

const CartItemPhoto = styled.img`
  background-image: url(${({ src }) => src});
  width: 50px;
  height: 50px;
  border-radius: 0.3rem;
`;
export default CartItem;
