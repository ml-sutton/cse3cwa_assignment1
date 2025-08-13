import React from "react";
import { ParsingEngineFactory } from "../ParsingEngineFactory";
import { ParsingEngine } from "../ParsingEngine";

export const MarkdownContext = React.createContext<ParsingEngine | null>(null);
interface MarkdownProviderProps {
  children: React.ReactNode;
}
export const MarkdownProvider: React.FC<MarkdownProviderProps> = ({ children }) => {
  const parsingEngine = ParsingEngineFactory.build();
  return (
    <MarkdownContext.Provider value={parsingEngine}>
      {children}
    </MarkdownContext.Provider>
  )
}
