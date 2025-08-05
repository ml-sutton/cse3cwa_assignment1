import React, { useContext, useState } from "react";
import { RenderingEngine } from "../RenderingEngine";

export const MarkdownContext = React.createContext(null);
interface MarkdownProviderProps {
  children: React.ReactNode;
}
export const MarkdownProvider: React.FC<MarkdownProviderProps> = ({ children }) => {
  const renderingEngine: RenderingEngine()
  return (
    <MarkdownContext.Provider value={null}>
      {children}
    </MarkdownContext.Provider>
  )
}
