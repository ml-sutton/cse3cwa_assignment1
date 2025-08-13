import { ASTNode } from "../models/ASTNode";
import { Token } from "../models/token";

export interface IParser {
  parse: (tokens: Token[]) => ASTNode
}

