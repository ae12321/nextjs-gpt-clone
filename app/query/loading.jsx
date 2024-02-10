import React from "react";

export default function loading() {
  return (
    <div className="">
      <div className="w-100 h-100">
        <span className="loading"></span>
        <p>処理中...</p>
      </div>
    </div>
  );
}
