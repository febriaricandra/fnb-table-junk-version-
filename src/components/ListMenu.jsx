import React from "react";

export default function ListMenu({product}) {
  return (
    <div className="flex flex-row items-center gap-4 p-4">
      <img
        src={`http://127.0.0.1:8000/api/menu/${product.gambar}`}
        alt={product.nama}
        className="w-20 h-20 object-cover"
      />
      <div className="flex flex-col">
        <span className="text-sm ">{product.status}</span>
        <span className="text-xl font-medium">{product.nama}</span>
        <span className="text-md font-medium">Rp. {product.harga}</span>
      </div>
      <hr />
    </div>
  );
}
