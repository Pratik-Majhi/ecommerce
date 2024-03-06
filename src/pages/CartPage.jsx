import { FaMinus, FaPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decreaseQuantity, removeItemFromCart } from "./../redux/cartSlice";
import { Link } from "react-router-dom";
import { increaseQuantity } from "./../redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  // Dispatch action to add item to the cart

  return (
    <div className="group">
      <div
        className={`cartItems   p-5  top-10 right-0 shadow-md bg-white border-[1px] border-gray-300 rounded-md z-20`}
      >
        <div className="heading flex justify-between gap-3 items-center">
          <h3 className="text-xl mb-3 font-bold uppercase text-gray-600">
            My Shopping Bag
          </h3>
          {cartItems.length > 0 && (
            <div className="totalAmount">
              Cart Total
              <span className="ml-2 p-2 py-0 rounded-sm bg-purple-200 text-purple-700">
                $
                {Math.ceil(
                  cartItems.reduce(
                    (acc, item) =>
                      acc +
                      (item.price -
                        (item.price * item.discountPercentage) / 100) *
                        item.quantity,
                    0
                  )
                )}
              </span>
            </div>
          )}
        </div>
        <div className="items space-y-3 max-h-96 overflow-scroll overflow-x-hidden">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="shadow-md rounded-md relative flex gap-3 border-gray-200 border-[1px] py-2 px-3"
              >
                <div className="image w-20">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="size-16 rounded-lg bg-gray-100 p-2 object-cover"
                  />
                </div>
                <div className="info w-full">
                  <h2 className="text-purple-600 font-bold">
                    {item.title} (
                    {item.quantity > 1
                      ? `${item.quantity} items`
                      : `${item.quantity} item`}
                    )
                  </h2>
                  <p>
                    {(item.price -
                      (item.price * item.discountPercentage) / 100) *
                      item.quantity}
                  </p>
                </div>

                <div className="updateQuantity flex gap-3 w-24 flex-col pr-10">
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="btn flex justify-center items-center"
                  >
                    <FaPlus />
                  </button>
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="btn flex justify-center items-center"
                  >
                    <FaMinus />
                  </button>
                </div>
                <div
                  onClick={() => dispatch(removeItemFromCart(item.id))}
                  className="deleteItem closeBtn absolute right-2 top-6 border-2 border-white cursor-pointer h-8 w-8 bg-red-500 text-white rounded-full flex justify-center items-center "
                >
                  <FaTrash />
                </div>
              </div>
            ))
          ) : (
            <div>There are no items in the cart</div>
          )}
        </div>

        <div className="actions mt-5 flex gap-5 justify-between">
          <Link to={"/checkout"}>
            <button className="btn">Checkout Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;