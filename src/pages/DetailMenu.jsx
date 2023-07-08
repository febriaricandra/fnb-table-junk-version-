import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavMenu from "../components/NavMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

export default function DetailMenu() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const getProductData = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/menu/${id}`);
    const data = await response.json();
    setProducts(data.data);
  };

  // eslint-disable-next-line
  useEffect(() => {
    getProductData();
  }, []);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const handleMinus = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItem({ ...products, quantity }));
  };

  return (
    <div className="bg-slate-300 w-full h-screen">
      <div className="container mx-auto max-w-[375px] border-solid bg-white h-screen flex flex-col">
        <NavMenu />
        <div className="relative mx-auto max-w-screen-xl">
          <div className="p-2.5">
            <div className="">
              <img
                alt="Les Paul"
                src={`http://127.0.0.1:8000/api/menu/${products.gambar}`}
                className=" w-full rounded-xl object-cover"
              />
            </div>

            <div className="sticky top-0">
              <div className="mt-8 flex flex-col">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">
                    {products.nama}
                  </h1>
                </div>
                <span className="opacity-50">{products.kategori}</span>
                <p className="text-lg font-bold">${products.harga}</p>
              </div>

              <div className="mt-4">
                <div className="prose max-w-none">
                  <p>{products.deskripsi}</p>
                </div>
              </div>

              <form className="mt-8">
                <div className="mt-8 flex gap-4 justify-between">
                  <div className="flex flex-row items-center">
                    <button
                      onClick={handleAdd}
                      className="block rounded bg-green-600 p-2 mx-2 text-xs font-medium text-white"
                    >
                      +
                    </button>
                    <div className="p-2">
                      <span className="" id="quantity">
                        {quantity}
                      </span>
                    </div>
                    <button
                      onClick={handleMinus}
                      className="block rounded bg-green-600 p-2 mx-2 text-xs font-medium text-white"
                    >
                      -
                    </button>
                  </div>

                  <button
                    type="submit"
                    onClick={handleAddToCart}
                    className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
