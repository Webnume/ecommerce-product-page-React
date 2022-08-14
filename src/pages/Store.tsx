import styled from "styled-components/macro";
import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

function Store() {
  return (
    <MainContainer>
      {storeItems.map((item) => (
        <StoreItem key={item.id} {...item} />
      ))}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  width: clamp(35%,70%,1000px);
  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 90vw;
    height: 85vh;
  }
`;

export default Store;
