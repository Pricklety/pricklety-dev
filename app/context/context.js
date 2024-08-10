// app/context/context.js
"use client";

import { createContext, useState } from "react";

export const context = createContext();

export function Provider({ children }) {
  const [value, setValue] = useState("Hello, world!");

  return (
    <context.Provider value={{ value, setValue }}>
      {children}
    </context.Provider>
  );
}
