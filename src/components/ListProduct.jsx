import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import products from "./../products.json";
import { addItemToCart } from "./../redux/cartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const ListProduct = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
      setLoading(false);
    }
    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
    toast.success(`${product.title} is added to the cart`);
  };
  console.log(products);
  if (loading) {
    return (
      <section>
        <div className="container px-10 py-10">
          <h3 className="text-3xl text-darkblue font-bold uppercase mb-5">
            Featured Products
          </h3>
          <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div
                className="product skeleton shadow-xl p-3 flex gap-3"
                key={index}
              >
                <div className="image w-1/4 bg-gray-300 rounded-md animate-pulse"></div>
                <div className="info w-3/4 flex flex-col gap-2">
                  <h2 className="text-xl mb-3 bg-gray-300 rounded-md h-7 animate-pulse"></h2>
                  <p className="text-sm opacity-70 bg-gray-300 rounded-md h-5 animate-pulse"></p>
                  <p className="text-sm  opacity-70 bg-gray-300 rounded-md h-5 animate-pulse"></p>
                  <div className="mt-5">
                    <button className="btn bg-blue-500 text-white rounded-sm px-3 py-1 text-sm bg-blue-500 text-white rounded-sm animate-pulse">
                      Loading...
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <div className="container px-10 py-10">
          <h3 className="text-3xl text-darkblue font-bold uppercase mb-5">
            Featured Products
          </h3>
          <div className="grid gap-3 sm:gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {products?.map((item) => (
              <div className="product shadow-xl p-3 flex gap-3" key={item.id}>
                <div className="image w-1/4">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="size-32 object-cover rounded-md"
                  />
                </div>
                <div className="info w-3/4">
                  <div className="heading flex justify-between items-center gap-3">
                    <h2 className="text-xl">{item.title}</h2>
                    <p>
                      $
                      {item.price -
                        (item.price * item.discountPercentage) / 100}
                    </p>
                  </div>
                  <p className="text-sm opacity-70 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="links flex gap-3">
                    <Link to={`/product-detail/${item.id}`}>
                      <button className="btn mt-5 px-3 py-1 text-sm bg-blue-500 text-white rounded-sm">
                        Read More
                      </button>
                    </Link>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="btn mt-5 px-3 py-1 text-sm bg-green-500 text-white rounded-sm"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default ListProduct;