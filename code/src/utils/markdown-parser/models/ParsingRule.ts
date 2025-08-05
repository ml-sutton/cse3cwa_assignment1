import { ASTNode } from "./ASTNode";
import { Token } from "./token";

export interface ParsingRule {
  match(tokens: Token[]): boolean;
  createNode(tokens: Token[]): ASTNode;
}
