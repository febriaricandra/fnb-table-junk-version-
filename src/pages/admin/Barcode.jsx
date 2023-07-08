import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function Barcode() {
  const [value, setValue] = useState();
  return (
    <main className="h-full overflow-y-auto">
      <div className="container grid px-6 mx-auto">
        <h1 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          QRCode
        </h1>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value of Qr-code"
        />
        {value && <QRCode title="qrcode" value={value} />}
      </div>
    </main>
  );
}
