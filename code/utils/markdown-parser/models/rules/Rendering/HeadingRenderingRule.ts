import { ASTNode } from "../../ASTNode";
import { RenderingRule } from "../../RenderingRule";

export class HeadingRenderingRule implements RenderingRule {
  match(node: ASTNode): boolean {
    return node.type === "heading";
  }

  render(node: ASTNode): string {
    return `<h${node.level}>${node.value}</h${node.level}>`;
  }
}
