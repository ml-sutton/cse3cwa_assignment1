import { Token } from "./token";

export interface TokenRule {
  match(line: string): boolean;
  createToken(line: string): Token;
}
