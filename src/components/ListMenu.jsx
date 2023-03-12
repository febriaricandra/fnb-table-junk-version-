import React from "react";

export default function ListMenu({product}) {
  return (
    <div className="flex flex-row items-center gap-4 p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-20 h-20 object-cover"
      />
      <div className="flex flex-col">
        <span className="text-sm font-medium">{product.name}</span>
        <span className="text-sm font-medium">Rp. {product.price}</span>
      </div>
      <hr />
    </div>
  );
}
