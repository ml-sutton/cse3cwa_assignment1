import { ASTNode } from "./ASTNode";

export interface RenderingRule {
  match(node: ASTNode): boolean;
  render(node: ASTNode): string;
}
