import React, { useState } from "react";
import SideMenu from "../../components/SideMenu";
import QRCode from "qrcode";

export default function Meja() {
  const [nomorMeja, setNomorMeja] = useState(0);
  const [qrCode, setQrCode] = useState(null);
  const GenerateQRCode = () => {
    QRCode.toDataURL(
      nomorMeja,
      {
        width: 300,
        height: 300,
        color: {
          dark: "#335383FF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQrCode(url);
      }
    );
  };

  return (
    <div className="flex flex-row h-screen bg-slate-300">
      <SideMenu />
      <div className="mx-auto flex flex-col justify-center">
        <h1 className="text-center my-4 font-bold text-2xl text-white">
          QRCODE
        </h1>
        <input
          className="rounded"
          type="number"
          placeholder="Nomor Meja"
          value={nomorMeja}
          onChange={(e) => setNomorMeja(e.target.value)}
        />
        <button
          className="bg-blue-500 p-4 rounded my-4 text-white text-2xl font-bold"
          onClick={GenerateQRCode}
        >
          Generate
        </button>
        {qrCode && (
          <>
            <img src={qrCode} alt="qrcode" />
            <button className="bg-blue-500 p-4 rounded my-4 text-white">
              SIMPAN DATA
            </button>
          </>
        )}
      </div>
    </div>
  );
}
