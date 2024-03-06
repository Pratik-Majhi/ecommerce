import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoIosPricetags } from "react-icons/io";
import { FaStar, FaRegStar } from "react-icons/fa6";
import Rating from "react-rating";
import { addItemToCart } from "./../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const [singleProduct, setSingleProduct] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const params = useParams();
  const priceAfterDiscount =
    singleProduct.price -
    (singleProduct.price * singleProduct.discountPercentage) / 100;
  const actualPrice = priceAfterDiscount.toFixed(0);
  const rating = singleProduct?.rating?.toFixed(0);

  useEffect(() => {
    async function getSingleProductDetail() {
      let response = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );
      setSingleProduct(response.data);
    }
    getSingleProductDetail();
    setCurrentImage(singleProduct.thumbnail);
  }, [params.id]);

  useEffect(() => {
    setCurrentImage(singleProduct.thumbnail);
  }, [singleProduct.thumbnail]);

  const { cartItems } = useSelector((state) => state.cart);
  console.log(cartItems);

  const handleAddToCart = () => {
    dispatch(addItemToCart(singleProduct));
    toast(`${singleProduct.title} is added to the cart`);
  };

  return (
    <section>
      <div className="container p-10 flex gap-10">
        <div className="w-1/2 flex justify-between items-stretch">
          <div className="thumbnails w-1/4 flex flex-col gap-3">
            {singleProduct?.images?.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setCurrentImage(item)}
                className="size-24  bg-gray-200 p-3 rounded-md"
              />
            ))}
          </div>
          <div className="imagewrapper  w-3/4">
            <img
              src={currentImage}
              className="h-full object-cover rounded-md"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="details">
            <div className="rating flex gap-3 items-center">
              <FaStar className="text-yellow-600" />{" "}
              <span>{singleProduct.rating}</span>
              {/* <Rating /> */}
              {/* <RatingComponent /> */}
            </div>
            <h3 className="text-2xl font-bold">
              {singleProduct.title}{" "}
              <span className="text-sm bg-gray-400 px-3 py-1 rounded-sm">
                {singleProduct.brand}
              </span>
            </h3>
            <div className="meta my-5 flex text-xl font-bold gap-5 items-center">
              <div className="item flex items-center gap-3">
                <IoIosPricetags />
                <span> $ {actualPrice}</span>
              </div>
              <div className="item line-through">{singleProduct.price}</div>
              <div className="item cat border-[1px] border-gray-400 rounded-md px-3 text-sm py-1 ">
                {singleProduct.category}
              </div>
            </div>
            <p>{singleProduct.description}</p>

            <div className="moreInfo">
              {singleProduct.stock < 1 ? "Out of Stock" : "In Stock"}
            </div>

            <div className="buttons flex gap-3 items-center">
              <button className="btn">Buy Now</button>
              <button className="btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;