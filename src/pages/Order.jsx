import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import { removeAllItem } from "../redux/cartSlice";


export default function Order() {
  const cart = useSelector((state) => state.cart);
  const { menuId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = localStorage.getItem("total");
  const handleOrder = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(removeAllItem());
    navigate(`/${menuId}/menu`);
    };

  return (
    <div className="bg-slate-300 w-full">
      <div className="container mx-auto max-w-[375px] border-solid bg-white h-screen flex flex-col">
        <section>
          <h1 class="sr-only">Checkout</h1>
          <div class="mx-auto">
            <div class="bg-gray-50">
              <div class="mx-auto pt-[44px] space-y-8 px-4 lg:px-8">
                <div class="flex items-center gap-4">
                  <span class="h-10 w-10 rounded-full bg-blue-700"></span>
                  <h2 class="font-medium text-gray-900">Meja {menuId}</h2>
                </div>
                <div>
                  <p class="text-2xl font-medium tracking-tight text-gray-900">
                    ${total}
                  </p>
                  <p class="mt-1 text-sm text-gray-600">For the purchase of</p>
                  <ul class="my-4 divide-y divide-gray-100">
                    {cart.map((item, index) => (
                    <li class="flex items-center gap-4 py-4">
                      <img
                        src={item.image}
                        alt=""
                        class="h-16 w-16 rounded object-cover"
                      />

                      <div>
                        <h3 class="text-sm text-gray-900">{item.name}</h3>

                        <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt class="inline">Harga:</dt>
                            <dd class="inline">{item.price}</dd>
                          </div>

                          <div>
                            <dt class="inline">Quantity:</dt>
                            <dd class="inline">{item.quantity}</dd>
                          </div>

                          <div>
                            <dt class="inline">Kategori:</dt>
                            <dd class="inline">{item.category}</dd>
                          </div>
                        </dl>
                      </div>
                    </li>)
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div class="bg-white">
              <div class="mx-auto px-4 lg:px-8">
                <form class="grid grid-cols-6 gap-4 my-2">
                  <div class="col-span-6">
                    <label
                      for="Nama"
                      class="block text-xs font-medium text-gray-700"
                    >
                      Nama
                    </label>
                    <input
                      type="email"
                      id="Email"
                      class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </div>
                  <div class="col-span-6">
                    <label
                      for="Phone"
                      class="block text-xs font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="Phone"
                      class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </div>
                  <div class="col-span-6">
                    <button onClick={handleOrder} class="block w-full rounded-md bg-blue-500 my-2 p-2.5 text-sm text-white transition hover:shadow-lg">
                      Order
                    </button>
                    <button class="block w-full rounded-md bg-red-500 my-2 p-2.5 text-sm text-white transition hover:shadow-lg">
                      Kembali
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
