import { createContext, useContext } from "react";

const context = createContext<HexoComponentProps>(undefined!);

export const PageProvider = context.Provider;

export const usePage = () => useContext(context);
