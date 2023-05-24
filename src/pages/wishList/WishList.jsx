import { useWishList } from "../../contexts/wishListContext/wishListContext";
import "../wishList/style.css";

const WishList = () => {
  const { getWishListData } = useWishList();
  return (
    <div className="wishList__container">
      <h1>under Development</h1>
      <button onClick={getWishListData}>getData</button>
    </div>
  );
};

export default WishList;
