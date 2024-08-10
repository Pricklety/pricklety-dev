// app/context/context.js
"use client";

import { createContext, useState } from "react";

export const context = createContext();

export function Provider({ children }) {
  const [value, setValue] = useState("Hello, world!");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}
