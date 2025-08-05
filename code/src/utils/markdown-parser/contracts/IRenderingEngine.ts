import { ASTNode } from "../models/ASTNode";

export interface IRenderingEngine {
  render: (abstractSyntaxTree: ASTNode) => string
}
