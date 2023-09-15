import CartIcon from "./CartIcon";
import CartItems from "./CartItems";

const CartWidget = () => {
  return (
    <div
      className="bg-warning rounded-circle p-3 position-relative"
      style={{ cursor: "pointer" }}
    >
      <CartIcon color="black" />
      <CartItems count={9} />
    </div>
  );
};

export default CartWidget;
