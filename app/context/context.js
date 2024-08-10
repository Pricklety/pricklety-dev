// app/context/context.js
"use client";

import { createContext, useState } from "react";

export const Context = createContext();

export function Provider({ children }) {
  const [value, setValue] = useState("Hello, world!");

  return (
    <Context.Provider value={{ value, setValue }}>
      {children}
    </Context.Provider>
  );
}
