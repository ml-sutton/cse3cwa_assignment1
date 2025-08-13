import { ASTNode } from "../../ASTNode";
import { RenderingRule } from "../../RenderingRule";

export class ParagraphRenderingRule implements RenderingRule {
  match(node: ASTNode): boolean {
    return node.type === "paragraph";
  }

  render(node: ASTNode): string {
    return `<p>${node.value}</p>`;
  }
}
