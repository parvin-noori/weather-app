import React from "react";

export default function ({ children }) {
  return (
    <div className="h-svh w-full grid place-content-center bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500">
      {children}
    </div>
  );
}
